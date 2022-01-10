import React, { useState } from "react";

export default function Filter(props) {
  const { filtersData, handleToggle } = props;
  const [isChecked, toggleChecked] = useState(false);

  const handleToggleCheck = (value) => {
    handleToggle(value);
    toggleChecked(!isChecked);
  };

  return (
    <div>
        <label htmlFor="">
          {filtersData.label}
          <input
            type="checkbox"
            checked={isChecked}
            key={filtersData.value}
            onChange={() => handleToggleCheck(filtersData.value)}
          ></input>
        </label>
    </div>
  );
}
