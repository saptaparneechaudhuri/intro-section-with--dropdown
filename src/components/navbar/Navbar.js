import React from "react";
import "./Navbar.css";
import FeaturesModal from "../features-modal/FeaturesModal";
import CompanyModal from "../company-modal/CompanyModal";
import MenuClose from "../MenuClose";

const Navbar = () => {
  const toggleIcon = (classname) => {
    let iconDown = document.querySelector(`.${classname}-up`);
    iconDown.classList.toggle("hide-icon");
    let iconUp = document.querySelector(`.${classname}-down`);
    iconUp.classList.toggle("hide-icon");
  };
  const handleFeaturesIcon = () => {
    // let iconUp = document.querySelector(".features-icon-up");
    // iconUp.classList.toggle("hide-icon");
    // let iconDown = document.querySelector(".features-icon-down");
    // iconDown.classList.toggle("hide-icon");
    toggleIcon("features-icon");
    let modal = document.querySelector(".features-modal");
    modal.classList.toggle("hide-modal");
  };

  const handleCompanyIcon = () => {
    // let iconUp = document.querySelector(".company-icon-up");
    // iconUp.classList.toggle("hide-icon");
    // let iconDown = document.querySelector(".company-icon-down");
    // iconDown.classList.toggle("hide-icon");
    toggleIcon("company-icon");
    let modal = document.querySelector(".company-modal");
    modal.classList.toggle("hide-modal");
  };
  return (
    <nav className="nav">
      <div className="nav-items--1" onClick={handleFeaturesIcon}>
        <span>Features</span>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow-down"
          className="features-icon-down"
        />
        <img
          src="/images/icon-arrow-up.svg"
          alt="arrow-down"
          className="features-icon-up hide-icon"
        />
      </div>

      <div className="nav-items--2" onClick={handleCompanyIcon}>
        <span>Company</span>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow-down"
          className="company-icon-down"
        />
        <img
          src="/images/icon-arrow-up.svg"
          alt="arrow-down"
          className="company-icon-up hide-icon"
        />
      </div>

      <div className="nav-items--3">
        <span>Careers</span>
      </div>

      <div className="nav-items--4">
        <span>About</span>
      </div>

      <div className="nav-items--5">
        <button className="btn login-btn">Login</button>
      </div>

      <div className="nav-items--6">
        <button className=" btn register-btn">Register</button>
      </div>

      <FeaturesModal />
      <CompanyModal />
      <MenuClose />
    </nav>
  );
};

export default Navbar;
