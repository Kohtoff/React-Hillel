import React from "react";

import './NavbarItem.css'

export default function NavbarItem(props) {
  const { data } = props;
  return (
    <li>
      <a className="navbar__item" href={data.link} key={data.name}>
        {data.name}
      </a>
    </li>
  );
}
