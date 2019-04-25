import React from "react";
import "./style.css";

function Navbar(props) {
    return (
      <nav className="navbar fixed-top navbar-expand-sm">
        <div>
          <ul className="navbar-nav">
            <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
            <li>
              Status: 
            </li>
         
          <li className="nav-item">
              Score: {props.score} |
              Top Score: {props.topScore}
            </li>
          </ul>
     </div>
      </nav>
    );
  }
  
  export default Navbar;