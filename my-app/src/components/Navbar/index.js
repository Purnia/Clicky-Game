import React from "react";
import "./style.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div>
          <ul className="navbar-nav">
            <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
            <li className="nav-item">
              Click to get Started!
            </li>
         
          <li className="nav-item">
              "Score: "
              "0"
              " | Top Score: "
              "0" 
            </li>
          </ul>
     </div>
      </nav>
    );
  }
  
  export default Navbar;