import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

export default class NewsItem extends Component {
  card = createRef();
  cardImg = createRef();
  cardTitle = createRef();
  cardContent = createRef();

  componentDidMount() {
    let card = this.card.current;
    let cardTitle = this.cardTitle.current;
    let cardContent = this.cardContent.current;
    console.log(this.card, this.cardTitle, this.cardContent);
    let tl = gsap.timeline({});
    console.log('YIMELINE', tl);

    tl.from(card, {
      stagger: 0.2,
      opacity: 0,
      x: -20,
    }, "+=1");

    tl.from(cardTitle, {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    }, "+=1");

    tl.from(cardContent, {
      stagger: 0.2,
      opacity: 0,
      y: 20,
    }, "+=1");
  }
  

  render() {
    const { data, onRemove } = this.props;
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
        <li className="article-list__item" ref={this.card} key={data.id}>
          <article
            className={
              "article-card " + (data.isSpecial ? "article-card--special" : "")
            }
          >
            <button onClick={() => onRemove(data.id)} className="remove-btn">
              Remove
            </button>
            <ul className="categories-bar">
              {categories.map((item) => {
                return (
                  <li
                    className="categories-bar__item"
                    key={item.id || new Date().getTime()}
                  >
                    {item.name || item}
                  </li>
                );
              })}
            </ul>
            {/* {data.photo ? (
              <img
                className="article-card__img"
                alt=" banner"
                src={data.photo}
                ref={this.cardImg}
              ></img>
            ) : null} */}
            <h2 ref={this.cardTitle} className="article-card__title">{data.title}</h2>
            <div
              className="article-card__desc"
              dangerouslySetInnerHTML={{ __html: data.content }}
              ref={this.cardContent}
            ></div>
            <p className="article-card__date">
              Created: <span>{formatDate()}</span>
            </p>
            <p className="article-card__date">
              By: <span>{data.author}</span>
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
    // categories: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     id: PropTypes.string,
    //     name: PropTypes.string,
    //   })
    // ),
    link: PropTypes.any,
    photo: PropTypes.string,
    author: PropTypes.string,
  }),
};
