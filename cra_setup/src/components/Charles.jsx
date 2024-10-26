import React from "react";
import "./Charle.css";
import logo from "./image/solex.jpg";


const Charles = ({ setCurrentPage }) => {
  return (
  
    <nav className="main-bar">
    
      <ul className="page">
        <li>
      
          <a href="#"  onClick={() => setCurrentPage("home")}>Home</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage("about")}>About</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage("product")}>Product</a >
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage("contact")}>Contact</a>
        </li>
      </ul>
      <img src={logo} alt="main-bar-logo" className="logo" />
    </nav>
         
  );
};

export default Charles;