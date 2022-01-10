import React from "react";

import NewsItem from "../NewsItem/NewsItem";

export default function NewsList(props) {
  const { data } = props;
  return (
    <ul>
      {data.length > 0 ? (
        data.map((item) => <NewsItem key={item.id} data={item} />)
      ) : (
        <h2 style={{ color: "red" }}>News list is empty!</h2>
      )}
    </ul>
  );
}
