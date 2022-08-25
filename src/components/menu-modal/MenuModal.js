import React, { useState } from "react";
import MenuClose from "../MenuClose";

import "./MenuModal.css";
import Accordion from "react-bootstrap/Accordion";

const MenuModal = () => {
  const handleMenuModalClose = () => {
    let menuModal = document.querySelector(".menu-modal");
    let mainContainer = document.querySelector(".container");
    let body = document.querySelector("body");
    let buttonWrapper = document.querySelector(".button-wrapper");

    let menuClose = document.querySelector(".menu-close");
    // console.log(menuClose);

    menuModal.classList.toggle("active");
    // menuModal.classList.toggle("width-zero");

    mainContainer.classList.toggle("blur");
    body.classList.toggle("dark");
    buttonWrapper.classList.toggle("full-width");
  };

  return (
    <div className="menu-modal ">
      <div className="menu-modal-wrapper">
        <div className="menu-close" onClick={handleMenuModalClose}>
          <img src="/images/icon-close-menu.svg" alt="menu-close" />
        </div>

        <Accordion className="accordion-container">
          <Accordion.Item eventKey="0" className="menu-item">
            <Accordion.Header className="foo">Features</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul className="features-list">
                  <li>
                    <img src="/images/icon-todo.svg" alt="todo" />
                    <p className="list-text">Todo List</p>
                  </li>

                  <li>
                    <img src="/images/icon-calendar.svg" alt="calendar" />
                    <p className="list-text">Calendar</p>
                  </li>

                  <li>
                    <img src="/images/icon-reminders.svg" alt="reminders" />
                    <p className="list-text">Reminders</p>
                  </li>

                  <li>
                    <img src="/images/icon-planning.svg" alt="planning" />
                    <p className="list-text">Planning</p>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="menu-item">
            <Accordion.Header>Company</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul className="company-list">
                  <li>
                    <p className="list-text">History</p>
                  </li>

                  <li>
                    <p className="list-text">Our Team</p>
                  </li>

                  <li>
                    <p className="list-text">Blog</p>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="menu-modal--3 menu-item">
          <span>Careers</span>
        </div>

        <div className="menu-modal--4 menu-item">
          <span>About</span>
        </div>
        <div className="button-wrapper">
          <button className="btn login-btn ">Login</button>

          <button className=" btn register-btn ">Register</button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
