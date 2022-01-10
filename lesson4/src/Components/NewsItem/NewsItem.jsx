import React, { useContext } from "react";

import { NewsPageContext } from "../NewsPage/NewsPage";
import "./NewsItem.css";

export default function NewsItem(props) {
  const context = useContext(NewsPageContext);

  const { data } = props;
  const {
    categories,
    dateCreated,
    link,
    id,
    isSpecial,
    photo,
    title,
    content,
    author,
  } = data;

  const ConditionalWrapper = ({ wrapper, children }) =>
    link ? wrapper(children) : children;

  const formatDate = () => {
    let jsonDate = dateCreated.replace(" ", "");
    return new Date(jsonDate).toLocaleString();
  };

  return (
    <ConditionalWrapper
      wrapper={(children) => (
        <a href={link} key={id} className="link-wrapper">
          {children}
        </a>
      )}
    >
      <li className="article-list__item" key={id}>
        <article
          className={
            "article-card " + (isSpecial ? "article-card--special" : "")
          }
        >

          <ul className="categories-bar">
            {categories && categories.map((item) => (
              <li
                className="categories-bar__item"
                key={item.id || new Date().getTime()}
              >
                {item.name || item}
              </li>
            ))}
          </ul>
          {photo && (
            <img className="article-card__img" alt=" banner" src={photo}></img>
          )}
          <h3 className="article-card__title">{title}</h3>
          <div
            className="article-card__desc"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <p className="article-card__extra-info">
            Created: <span>{formatDate()}</span>
          </p>
          <p className="article-card__extra-info">
            by: <span>{author}</span>
          </p>
          <NewsPageContext.Consumer>
            {(removePost) => <button className="remove-btn" onClick={() => removePost(id)}>Remove</button>}
          </NewsPageContext.Consumer>
        </article>
      </li>
    </ConditionalWrapper>
  );
}
