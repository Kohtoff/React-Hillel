import React, { Component } from "react";

import "./Pagination.css";

export default class Pagination extends Component {
  render() {
    const { currentPage, totalPages, onClick, prevPage, nextPage } = this.props;
    const numericBtns = [];

    for (let i = 1; i <= totalPages; i++) {
      numericBtns.push(
        <button
          key={i}
          disabled={i == currentPage ? true : false}
          className="pagination__btn"
        >
          {i}
        </button>
      );
    }


    return (
      <div className="pagination-container">
        <div onClick={onClick} className="pagination">
          <button
            disabled={prevPage ? false : true}
            className="pagination__btn pagination__btn--prev"
          >
            Previous
          </button>
          {numericBtns}
          <button
            disabled={nextPage ? false : true}
            className="pagination__btn pagination__btn--next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
