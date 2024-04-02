import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";

// const backendurl = "https://spauth0.netlify.app/.netlify/functions";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getPublicResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};

export const getProtectedResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJ0VFc0UDlFdGhna1I4TEt6a0V2TyJ9.eyJpc3MiOiJodHRwczovL2Rldi00ZmU3dXFramIzN2kzMTV3LmpwLmF1dGgwLmNvbS8iLCJzdWIiOiJ5emJmMWJ2Y214aDhLRlZxbUlrdGRUUkVKMWhTU3FIRkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9oZWxsby13b3JsZC5leGFtcGxlLmNvbSIsImlhdCI6MTcxMDEyOTUwMiwiZXhwIjoxNzEwMjE1OTAyLCJhenAiOiJ5emJmMWJ2Y214aDhLRlZxbUlrdGRUUkVKMWhTU3FIRiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.N_y8FSPCBNSZ3wchLhjIZHNpIJcy4rFKXpkFOcRS9irxOrjvCn4hjcKHOLQKgHZwsG0H58RiB90QRuwE7cYGMIr27hIZsTJWZu-miUMRPdqyhh_6zod8Gg5GKMyBprD4EbP4Fba3l_TglowkRw7xJKtx9g3_XJs514w5N4c0fClGepxdHjoWm3rIG2BPBgGWZ0mKGvFmleTaCiu_6mBkz3x2_eYtN5KAXaBSLjqHMP20MCHIzq9ZtI0LzELkMMz663jh8WHi9m5vSDiTzPaRYbR3ueAE86x_mEcTrrnEFLWlTRqst0Bjenn03mJgGCkVC1V3-ERH7sCRYo434X7y-A",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};
export const gettestapi = async (value: any): Promise<any> => {
  const axios = require("axios");
  const url = `/.netlify/functions/index?code=${value}`;

  axios
    .get(url)
    .then(function (response: any) {
      console.log(response.data[0]);
      const obj = JSON.stringify(response.data);
      console.log(obj);
    })
    .catch(function (error: any) {
      console.error(error);
    });
  //   const data = await axios.get(url);
  //   console.log(data);
  //   console.log(response.data.data.id_token);
  // };
};
export const getIDToken = async (value: any): Promise<any> => {
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
    redirect_uri: "https://frolicking-basbousa-7b968f.netlify.app",
    code: value,
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
  const response = await axios.post(
    url,
    new URLSearchParams({
      client_id: "QXE0KF4WDs7Q73YYnnQVBIQVajPMXFPJ",
      redirect_uri: "https://frolicking-basbousa-7b968f.netlify.app",
      code: value,
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
  console.log(response);
  // const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  // return {
  //   data,
  //   error,
  // };
};

export const getAdminResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};
