import React from "react";

import "./noteList.css";

const noteList = ({ items }) => {
  return (
    <ul className="note-list">
        {console.log(items)}
      {items.map((item, index) => (
        <li className="note-item" key={index}>
          <span className="note-item__title">{item.title}</span>
          <hr/>
          <p className="note-item__desc">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default noteList;