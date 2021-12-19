import React, { Component } from "react";

import "./ShipCard.css";

export default class ShipCard extends Component {
  state = {
    detailedData: null,
    error: null,
    status: "initial",
  };

  render() {
    const { data } = this.props;
    const { detailedData, error, status } = this.state;
    return (
      <div className="ship-card">
        {detailedData ? (
          <React.Fragment>
            <div className="ship-card__img">
              <img
                src={data.img ? data.img : "/paperPlane.png"}
                alt="starship`s photo"
              />
            </div>
            <h3 className="ship-card__name">{data.name}</h3>
            <p className="ship-card__model">{detailedData.properties.model}</p>
            <ul className="ship-card__extra-info">
              {Object.entries(detailedData.properties).map(([key, value]) => (
                <li className="">
                  {key} : {value}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          "Loading"
        )}
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      status: "loading",
      error: null,
      detailedData: null,
    });
    fetch(this.props.data.url)
      .then((response) => response.json())
      .then(({ result }) => {
        this.setState({
          status: "success",
          error: null,
          detailedData: result,
        });
      })
      .catch((error) => {
        this.setState({
          status: "failed",
          error,
          detailedData: null,
        });
      });
  }
}
