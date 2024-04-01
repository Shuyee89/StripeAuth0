import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarTabProps {
  path: string;
  label: string;
}

export const NavBarTab: React.FC<NavBarTabProps> = ({ path, label }) => {
  return (
    <NavLink to={path} className="nav-bar__tab">
      {label}
    </NavLink>
  );
};
