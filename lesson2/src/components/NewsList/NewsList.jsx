import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";

export default class NewsList extends Component {
  render() {
    const { data } = this.props;
    return (
      <ul className="article-list">
        {data && data.map((item) => <NewsItem data={item} />)}
      </ul>
    );
  }
}
