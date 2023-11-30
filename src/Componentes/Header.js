import React from "react";
import logo from "../img/logo2utn.png";
import '../css/Estilos.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"/>
    </div>
  );
}

export default Header;