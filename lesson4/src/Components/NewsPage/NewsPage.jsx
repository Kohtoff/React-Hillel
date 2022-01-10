import React, { useState, useEffect, createContext } from "react";

import NewsList from "../NewsList/NewsList";
import Filter from "../Filter/Filter";
import AddNewsForm from "../AddNewsForm/AddNewsForm";

export const NewsPageContext = createContext();

const filters = [
  { label: "With photo", value: "photoFilter" },
  { label: "With link", value: "linkFilter" },
  { label: "Special post", value: "specialFilter" },
];


export default function NewsPage(props) {
  const [newsData, setNewsData] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    photoFilter: false,
    linkFilter: false,
    specialFilter: false,
  });
  const {searchValue} = props

  useEffect(() => {
    fetch("news.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((fetchedData) => {
        setNewsData(fetchedData);
      });
  }, []);

  const removePost = (targetID) =>
    setNewsData(newsData.filter((item) => item.id !== targetID));

  const toggleFilter = (value) =>
    setActiveFilters({ ...activeFilters, [value]: !activeFilters[value] });

  const addNews = (payload) => setNewsData([payload, ...newsData]);

  const filteredData = () => {
    return newsData.filter((item) => {
      if (activeFilters.photoFilter && !item.photo) return false;
      if (activeFilters.linkFilter && !item.link) return false;
      if (activeFilters.specialFilter && !item.isSpecial) return false;
      if (
        searchValue &&
        !item.content.toLowerCase().includes(searchValue) &&
        !item.title.toLowerCase().includes(searchValue) &&
        !item.author.toLowerCase().includes(searchValue)
      )
        return false;
      return true;
    });
  };

  return (
    <div>
      <h2>Latest News</h2>
      {filters &&
        filters.map((item) => (
          <Filter key={item.value} filtersData={item} handleToggle={toggleFilter} />
        ))}
      <AddNewsForm onSubmit={addNews}/>
      <NewsPageContext.Provider value={removePost}>
        {newsData && <NewsList data={newsData} />}
      </NewsPageContext.Provider>
    </div>
  );
}
