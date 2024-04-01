import React, { useEffect, useState } from "react";
import { getIDToken, gettestapi } from "../../services/message.service";
import logo from "src/styles/images/Singpass-logo.png";
import { useLocation } from "react-router-dom";

export const LoginButtonsp: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  console.log(code, message);
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
  }, [code]);

  return (
    <div>
      <button
        className="button__loginsp"
        onClick={() =>
          (window.location.href =
            "https://stg-id.singpass.gov.sg/auth?scope=openid&state=30e370f9-e38a-42a5-98d2-3cc8d2a75ed4&response_type=code&redirect_uri=https://frolicking-basbousa-7b968f.netlify.app&client_id=QXE0KF4WDs7Q73YYnnQVBIQVajPMXFPJ&nonce=" +
            crypto.randomUUID())
        }
      >
        <img src={logo} alt="Website Logo" width="60" height="17" />
      </button>
      <button className="button__loginsp" onClick={gettestapi}>
        Test
      </button>
    </div>
  );
};
