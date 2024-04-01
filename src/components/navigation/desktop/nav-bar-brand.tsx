import React from "react";
import { NavLink } from "react-router-dom";
import logo from "src/styles/images/Parenthood.png";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/" exact>
        <img
          className="nav-bar__logo"
          src={logo}
          alt="Website Logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
