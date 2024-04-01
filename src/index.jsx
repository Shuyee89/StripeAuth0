import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
// import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import "./styles/styles.css";

// ReactDOM.render(
//   ,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
