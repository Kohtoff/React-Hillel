import React, { Component } from "react";
import NewsForm from "../../../../lesson2/src/components/NewsForm/NewsForm";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import SearchBar from "../searchBar/searchBar";
import "./NewsPage.css";

const filters = [
  { label: "With photo", value: "photoFilter" },
  { label: "With link", value: "linkFilter" },
  { label: "Special post", value: "specialFilter" },
];

export default class NewsPage extends Component {
  state = {
    checked: {
      photoFilter: false,
      linkFilter: false,
      specialFilter: false,
    },
    newsData: null,
    inputValue: null,
  };


  toggleCheck = (value) => {
    this.setState({
      checked: {
        ...this.state.checked,
        [value]: !this.state.checked[value],
      },
    });
  };

  updateInput = (value) => {
    this.setState({
      inputValue: value.toLowerCase(),
    });
  };

  render() {
    const { newsData, inputValue } = this.state;
    const { photoFilter, linkFilter, specialFilter } = this.state.checked;
    const filteredData = () => {
      return newsData.filter((item) => {
        if (photoFilter && !item.photo) return false;
        if (linkFilter && !item.link) return false;
        if (specialFilter && !item.isSpecial) return false;
        if (inputValue && (!item.content.toLowerCase().includes(inputValue) && !item.title.toLowerCase().includes(inputValue) && !item.author.toLowerCase().includes(inputValue))) return false;
        return true;
      });
    };

    return (
      <main id="main">
        <h1 className="main-title">Latest News</h1>
        <SearchBar
          value={inputValue}
          handlerOnChange={(e) => this.updateInput(e.target.value)}
        />
        <NewsForm />
        {filters &&
          filters.map((item, index) => {
            return (
              <NewsFilters
                key={index}
                handlerOnClick={() => this.toggleCheck(item.value)}
              >
                {item.label}
              </NewsFilters>
            );
          })}
        {newsData && <NewsList data={filteredData()} />}
      </main>
    );
  }
}
