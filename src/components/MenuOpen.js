import React from "react";

const MenuOpen = () => {
  const handleMenuModal = () => {
    let menuModal = document.querySelector(".menu-modal");
    let mainContainer = document.querySelector(".container");
    let body = document.querySelector("body");
    let buttonWrapper = document.querySelector(".button-wrapper");

    // console.log(buttons);
    // menuModal.style.display = "grid";

    menuModal.classList.toggle("active");
    // menuModal.classList.toggle("width-zero");
    // buttons.classList.toggle("width-zero");
    mainContainer.classList.toggle("blur");
    body.classList.toggle("dark");
    buttonWrapper.classList.toggle("full-width");
  };

  return (
    <div className="menu-open" onClick={handleMenuModal}>
      <img src="/images/icon-menu.svg" alt="menu-open" />
    </div>
  );
};

export default MenuOpen;
