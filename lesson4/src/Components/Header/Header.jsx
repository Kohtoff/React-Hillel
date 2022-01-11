import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>Hillel HW</h1>
      </div>
      <nav>
        <ul className="nav" style={{display: 'none'}}>
          <li>Part1</li>
          <li>Part2</li>
        </ul>
      </nav>
    </div>
  );
}
