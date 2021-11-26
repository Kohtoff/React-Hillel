import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewsItem extends Component {
  render() {
    const { data } = this.props;

    const ConditionalWrapper = ({ wrapper, children }) =>
      data.link ? wrapper(children) : children;

    const categories = data.categories;

    const formatDate = () => {
      let jsonDate = data.dateCreated.replace(" ", "");
      jsonDate = new Date(jsonDate);
      return jsonDate.toLocaleString();
    };

    return (
      <ConditionalWrapper
        wrapper={(children) => (
          <a href={data.link} key={data.id} className="link-wrapper">
            {children}
          </a>
        )}
      >
        <li className="article-list__item" key={data.id}>
          <article
            className={
              "article-card " + (data.isSpecial ? "article-card--special" : "")
            }
          >
            <ul className="categories-bar">
              {categories.map((item) => {
                return (
                  <li className="categories-bar__item" key={item.id}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
            {data.photo ? (
              <img
                className="article-card__img"
                alt=" banner"
                src={data.photo}
              ></img>
            ) : null}
            <h2 className="article-card__title">{data.title}</h2>
            <div
              className="article-card__desc"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
            <p className="article-card__date">
              Created: <span>{formatDate()}</span>
            </p>
          </article>
        </li>
      </ConditionalWrapper>
    );
  }
}

NewsItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    isSpecial: PropTypes.bool,
    dateCreated: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    link: PropTypes.any,
    photo: PropTypes.string,
    author: PropTypes.string,
  }),
};
