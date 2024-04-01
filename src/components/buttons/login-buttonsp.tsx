import React, { useEffect, useState } from "react";
import { getIDToken } from "../../services/message.service";
import logo from "src/styles/images/Singpass-logo.png";
import { useLocation } from "react-router-dom";

export const LoginButtonsp: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  console.log(code);

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getIDToken(code);

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <button
      className="button__loginsp"
      onClick={() =>
        (window.location.href =
          "https://stg-id.singpass.gov.sg/auth?scope=openid&state=30e370f9-e38a-42a5-98d2-3cc8d2a75ed4&response_type=code&redirect_uri=https://test.d3hbw70k8kmva5.amplifyapp.com&client_id=tLRDBkf1CNy5Rsi34mEKuOD5EpQAwjIq&nonce=DVs6-iC9S_P3D4A-Orqddn8lnTGBhPjivS3klznXubPE")
      }
    >
      <img src={logo} alt="Website Logo" width="60" height="17" />
    </button>
  );
};
