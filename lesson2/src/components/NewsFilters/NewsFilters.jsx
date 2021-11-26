import React, { Component } from "react";

export default class NewsFilters extends Component {
  state = {
    checked: false,
  };
  render() {
    const { handlerOnClick, children } = this.props;
    const { checked } = this.state;

    const toggleCheck = (value) => {
      handlerOnClick(value);
      this.setState({ checked: !checked });
    };

    return (
      <button
        className={"filter__item" + (checked ? " filter__item--active" : "")}
        onClick={toggleCheck}
      >
        {children}
      </button>
    );
  }
}
