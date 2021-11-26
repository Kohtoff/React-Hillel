import React, { Component } from "react";
import PropTypes from "prop-types";

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

NewsFilters.propTypes = {
  handlerOnClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

NewsFilters.defaultProps = {
  children: 'Filter button'
}
