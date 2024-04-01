import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";

export const NavBar: React.FC = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <div style={style}>
          <h2 className="nav-barh1">Care . Love . Learn</h2>
        </div>
        <NavBarTabs />
        <NavBarButtons />
      </nav>
    </div>
  );
};
