import React, { Component } from "react";
import PropTypes from 'prop-types'
import NewsItem from "../NewsItem/NewsItem";

export default class NewsList extends Component {
  render() {
    const { data, onRemove } = this.props;
    return (
      <ul className="article-list">
        {data && data.map((item) => <NewsItem key={item.id} onRemove={onRemove} data={item} />)}
      </ul>
    );
  }
}

NewsItem.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}