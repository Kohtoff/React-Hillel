import React, { useEffect, useState } from "react";

import './PlanetCard.css'

export default function ShipCard(props) {
  const [detailedData, setDetailedData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("initial");
  const { data } = props;

  useEffect(() => {
    setDetailedData("loading");
    setError(null);
    setDetailedData(null);

    fetch(props.data.url)
      .then((response) => response.json())
      .then(({ result }) => {
        setStatus("success");
        setError(null);
        setDetailedData(result);
      })
      .catch((error) => {
        setStatus("failed");
        setError(error);
        setDetailedData(null);
      });
  }, []);
  return (
    <div className="ship-card" key={data.uid}>
      {detailedData ? (
        <React.Fragment>
          <div className="ship-card__img">
            <img
              src={data.img ? data.img : "/planetImg.svg"}
              alt="starship`s photo"
            />
          </div>
          <h3 className="ship-card__name">{data.name}</h3>
          <ul className="ship-card__extra-info">
            {Object.entries(detailedData.properties).map(([key, value]) => {
              if(key === 'url') return;
              return (
              
              <li className="" key={key}>
                {key} : {value}
              </li>
            )})}
          </ul>
        </React.Fragment>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
