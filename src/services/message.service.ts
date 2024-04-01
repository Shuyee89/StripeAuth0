import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";

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

export const getIDToken = async (value: any): Promise<ApiResponse> => {
  const article = {
    client_id: "tLRDBkf1CNy5Rsi34mEKuOD5EpQAwjIq",
    redirect_uri: "https//test.d3hbw70k8kmva5.amplifyapp.com",
    grant_type: "authorization_code",
    code: value,
    client_assertion_type:
      "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion:
      "eyJraWQiOiJ0ZXN0aW5nMTIzIiwiYWxnIjoiRVM1MTIifQ.ewogICAgImlzcyI6ICJ0TFJEQmtmMUNOeTVSc2kzNG1FS3VPRDVFcFFBd2pJcSIsCiAgICAic3ViIjogInRMUkRCa2YxQ055NVJzaTM0bUVLdU9ENUVwUUF3aklxIiwKICAgICJhdWQiOiAiaHR0cHM6Ly9zdGctaWQuc2luZ3Bhc3MuZ292LnNnIiwKICAgICJleHAiOiAxNzA5NjI4NDM2LAogICAgImlhdCI6IDE3MDk2Mjg0MzYKfQ.AQT5L0jBQQY1Fw9HFVgEr7TAKxjeGSqqY9aLMdOTLFh9n4G5dCMVTwl8t2T3cCHLBZ6auQxckrebgE9NexjCr_aXAYN9QKgMbCflaE-b7pafNJyzWNBhNPOnwlJhJ-t4AwuHntSCOMTwRyqcRn4tCSRJ8OWQZvyGGwJo1fMkFYUnFuGy",
  };

  const config: AxiosRequestConfig = {
    url: "https://stg-id.singpass.gov.sg/token",
    method: "POST",
    data: JSON.stringify(article),
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
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
