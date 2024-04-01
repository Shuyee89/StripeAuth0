import React from "react";
import logo from "src/styles/images/Logoicon.png";

export const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner hero-banner--yellow-mandarine">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hello, React World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for React apps using <strong>Auth0</strong> and payment using{" "}
        <strong>Stripe</strong>.
      </p>
    </div>
  );
};
