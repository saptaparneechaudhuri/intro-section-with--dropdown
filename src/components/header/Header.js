import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Make remote work</h1>
      <p className="header-content">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="header-button">Learn more</button>

      <div className="clients">
        <img src="/images/client-databiz.svg" alt="databiz" />
        <img src="/images/client-audiophile.svg" alt="databiz" />
        <img src="/images/client-meet.svg" alt="databiz" />
        <img src="/images/client-maker.svg" alt="databiz" />
      </div>
    </header>
  );
};

export default Header;
