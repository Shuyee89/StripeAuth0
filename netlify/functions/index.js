exports.handler = async (event) => {
  try {
    const code = event.queryStringParameters.code;
    const jose = require("jose");
    const moment = require("moment");
    const axios = require("axios");
    const alg = "ES256";
    const jwk = {
      kty: "EC",
      x: "ymaMMlqKzge9pmGUxPwS3qfkYUtob29sEgG_wU63MOE",
      y: "3MCwa-qqDnE1ZPeyIH2E13aabE2U_89UyNJa6R0giQc",
      crv: "P-256",
      d: "y6SBUcEt0OzcCKtkXqOyKfMDsHNLZqi0GHUvkiC7WX4",
    };

    const privateKey = await jose.importJWK(jwk, alg);
    const nowTime = moment().unix();
    const futureTime = moment().add(1, "minutes").unix();
    const jwt = await new jose.SignJWT({
      sub: "QXE0KF4WDs7Q73YYnnQVBIQVajPMXFPJ",
      iss: "QXE0KF4WDs7Q73YYnnQVBIQVajPMXFPJ",
      aud: "https://stg-id.singpass.gov.sg",
      iat: nowTime,
      exp: futureTime,
    })
      .setProtectedHeader({
        alg: "ES256",
        kid: "sig-20240322",
        typ: "JWT",
      })
      .sign(privateKey);

    console.log(jwt);

    const article = {
      client_id: "QXE0KF4WDs7Q73YYnnQVBIQVajPMXFPJ",
      redirect_uri: "https://spauth0.netlify.app",
      code: code,
      client_assertion_type:
        "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      grant_type: "authorization_code",
      client_assertion: jwt,
    };
    console.log(article);
    //  const config: AxiosRequestConfig = {
    //   url: "https://stg-id.singpass.gov.sg/token",
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   data: JSON.stringify(article),
    // };

    const url = "https://stg-id.singpass.gov.sg/token";
    const { data } = await axios.post(
      url,
      new URLSearchParams({
        client_id: "QXE0KF4WDs7Q73YYnnQVBIQVajPMXFPJ",
        redirect_uri: "https://spauth0.netlify.app",
        code: code,
        client_assertion_type:
          "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        grant_type: "authorization_code",
        client_assertion: jwt,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(data);
    console.log(typeof data);

    try {
      const descprivateKey = {
        kty: "EC",
        d: "p4YZHS0_BS4VMUayEtt38qi2sMdkhs4JRFlks7HJCD8",
        use: "enc",
        crv: "P-256",
        kid: "enc123",
        x: "0GR5oBa1FINjCZP_W-nR8Yqoz4E_9j7lgCuRPh9PZTA",
        y: "0leGfxdQSJdtubopqhj5uhPVYV3LSd_yf3y2DdRD5No",
      };
      const privateKey2 = await jose.importJWK(
        descprivateKey,
        "ECDH-ES+A256KW"
      );
      const { plaintext, protectedHeader } = await jose.compactDecrypt(
        data.id_token,
        privateKey2
      );
      console.log(protectedHeader);
      console.log(new TextDecoder().decode(plaintext));
      // const jwkkey = await fromKeyLike(descprivateKey);
      // const decryptedToken = await jose.compactDecrypt(data.id_token, jwkkey);

      // // Extract the payload from the decrypted token
      // const payload = JSON.parse(decryptedToken.payload.toString());

      // console.log("Decrypted token:", payload);

      // const { payload, protectedHeader } = await jose.compactVerify(
      //   data.id_token,
      //   privateKey
      // );

      // console.log(protectedHeader);
      // console.log(new TextDecoder().decode(payload));
    } catch (e) {
      console.log(e);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data: data.id_token }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ data: e }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  // const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  // return {
  //   data,
  //   error,
  // };
};
