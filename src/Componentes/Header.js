import React from "react";
import "../css/Header.css";
import logo from "../img/logo2utn.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"/>
    </div>
  );
}

export default Header;