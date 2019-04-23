import React from "react";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              Clicky Game
            </li>
            <li className="nav-item">
              Click an Image to Begin!
            </li>
            <li className="nav-item">
              Score: 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;