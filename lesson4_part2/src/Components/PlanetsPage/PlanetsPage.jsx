import React, { useState, useEffect } from "react";

import Pagination from "../Pagination/Pagination";
import ShipCard from "../PlanetCard/PlanetCard";
import "./PlanetsPage.css";

export default function ShipsPage() {
  const [status, setStatus] = useState("initial");
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const fetchData = (page) => {
    setStatus("loading");
    setError(null);
    setData(null);

    fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=10`)
      .then((response) => {
        return response.json();
      })
      .then((recievedData) => {
        setData(recievedData);
        setStatus("success");
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
        setError(error);
      });
  };

  const handlePagination = (e) => {
    console.log("handlePagination", page);
    const value = e.target.textContent.toLowerCase();
    if (value === "previous") setPage(page - 1);
    else if (value === "next") setPage(page + 1);
    else setPage(value);
  };


  useEffect(() => {
    fetchData(page)
  }, [page]);

  return (
    <div>
      <h1 className="main-title">Starships for you</h1>
      {status === "loading" || status === "initial" ? (
        <div className="loader"></div>
      ) : (
        <React.Fragment>
          {status === "failed" ? (
            <span className="error-msg">{error.message}</span>
          ) : (
            <React.Fragment>
              <div className="card-container">
                {data.results.length > 1 &&
                  data.results.map((item) => {
                    console.log("ITEM", item);
                    return <ShipCard data={item} key={item.uid} />;
                  })}
              </div>

              <Pagination
                prevPage={data.previous}
                nextPage={data.next}
                currentPage={page}
                totalPages={data.total_pages}
                onClick={handlePagination}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
