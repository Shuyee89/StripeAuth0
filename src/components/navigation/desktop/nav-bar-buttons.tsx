import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../../buttons/login-button";
import { LoginButtonsp } from "../../buttons/login-buttonsp";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";

export const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
          <LoginButtonsp />
        </>
      )}

      {isAuthenticated && <LogoutButton />}
    </div>
  );
};
