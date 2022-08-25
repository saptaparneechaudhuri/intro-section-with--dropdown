import React from "react";
import "./CompanyModal.css";

const CompanyModal = () => {
  return (
    <div className="company-modal hide-modal">
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
  );
};

export default CompanyModal;
