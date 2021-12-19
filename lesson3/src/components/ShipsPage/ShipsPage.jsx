import React, { Component } from "react";

import ShipCard from "../ShipCard/ShipCard";
import Pagination from "../Pagination/Pagination";
import "./ShipsPage.css";

export default class ShipsPage extends Component {
  state = {
    status: "initial",
    error: null,
    data: null,
    page: 1,
    searchValue: ''
  };

  fetchData = (page) => {
    this.setState({
      status: "loading",
      error: null,
      data: null,
    });

    fetch(`https://www.swapi.tech/api/starships?page=${page}&limit=10`)
      .then((response) => {
        return response.json()})
      .then((data) => {
        this.setState({
          status: "success",
          error: null,
          data,
        });
      })
      .catch((error) => {
        this.setState({
          status: "failed",
          error,
        });
      });
  };

  handlePagination = (e) => {
    const value = e.target.textContent;
    if (value.toLowerCase() === "previous") {
      this.setState({
        page: this.state.page - 1,
      });
    } else if (value.toLowerCase() === "next") {
      this.setState({
        page: this.state.page + 1,
      });
    } else {
      this.setState({
        page: value,
      });
    }
  };

  updateInput = (value) => {
    this.setState({
      searchValue: value
    })
  }


  render() {
    const { data, status, error, page } = this.state;

    return (
      <div>
        <h1 className="main-title">Starships for you</h1>
        {true ? (
          <div className="loader"></div>
        ) : (
          <React.Fragment>
            {status === "failed" ? (
              <span className="error-msg">{error.message}</span>
            ) : (
              <React.Fragment>
                <div className="card-container">
                  {data.results.map((item) => (
                    <ShipCard key={item.uid} data={item} />
                  ))}
                </div>

                <Pagination
                  prevPage={data.previous}
                  nextPage={data.next }
                  currentPage={page}
                  totalPages={data.total_pages}
                  onClick={this.handlePagination}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { page } = this.state;
    this.fetchData(page);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const { page } = this.state;

    if (page !== prevPage) {
      this.fetchData(page);
    }
  }
}
