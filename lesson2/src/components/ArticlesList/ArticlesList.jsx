import React, { Component } from "react";
import './ArticlesList.css'

export default class ArticlesList extends Component {
  state = {
    cardData: [],
  };

  componentDidMount() {
    fetch(this.props.dataPath, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((recievedData) => {
        this.setState({ cardData: recievedData });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const cardData = this.state.cardData;
    return (
      <ul className="article-list">
        {cardData.map((item) => {
          const getDate = () => {
            let jsonDate = item.dateCreated.replace(" ", "");
            jsonDate = new Date(jsonDate);
            return jsonDate.toLocaleString();
          };
          const categories = item.categories;

          const ConditionalWrapper = ({ wrapper, children }) =>
            item.link ? wrapper(children) : children;

          return (
            <ConditionalWrapper
              wrapper={(children) => (
                <a href={item.link} key={item.id} className="link-wrapper">
                  {children}
                </a>
              )}
            >
              <li className="article-list__item" key={item.id}>
                <article
                  className={
                    "article-card " +
                    (item.isSpecial ? "article-card--special" : "")
                  }
                >
                  <ul className="categories-bar">
                    {categories.map(item => {
                      return (<li className="categories-bar__item" key={item.id}>{item.name}</li>)
                    })}
                  </ul>
                  {item.photo ? (
                    <img
                      className="article-card__img"
                      alt=" banner"
                      src={item.photo}
                    ></img>
                  ) : null}
                  <h2 className="article-card__title">{item.title}</h2>
                  <div
                    className="article-card__desc"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                  <p className="article-card__date">
                    Created: <span>{getDate()}</span>
                  </p>
                </article>
              </li>
            </ConditionalWrapper>
          );
        })}
      </ul>
    );
  }
}
