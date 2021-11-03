import React from "react";
import "./Navbar.css";

const Navbar = ({ itemList }) => {
  return (
    <nav>
      <ul className="navbar">
        {itemList.map((item) => (
          <li className="navbar__item">
            <a href="#" className="navbar__link transited">
              {item.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
