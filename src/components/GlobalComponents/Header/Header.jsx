import React from "react";
import "../../../assets/styles/scss/HeaderComponent/Header.scss";
import Button from "../Button/Button";

function Header({ PageName = String, SubPageName = String }) {
  return (
    <div className="Header">
      <div className="NamePage">
        <h1>
          {PageName}
          <span>/{SubPageName}</span>
        </h1>
      </div>
      <div className="ContentPages">
      </div>
    </div>
  );
}

export default Header;
