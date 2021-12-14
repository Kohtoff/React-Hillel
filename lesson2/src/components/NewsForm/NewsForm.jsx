import React, { Component } from "react";

import { getBase64 } from "../../utils";
import "./NewsForm.css";

export default class NewsForm extends Component {
  state = {
    formVisibility: false,
    title: "",
    content: "",
    desc: "",
    photo: "",
    categories: [],
    author: "",
  };

  handleChangeText = (e) => {
    const { value, name } = e.currentTarget;
    console.log(e.currentTarget);
    this.setState({
      [name]: value,
    });
  };

  handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
      this.setState({
        photo: base64,
      });
    });
  };

  handleChangeCategories = (e) => {
    const { value } = e.currentTarget;
    console.log(value);
    let newCategory;

    if (this.state.categories.includes(value)) {
      newCategory = this.state.categories.filter((item) => item !== value);
      console.log(newCategory, "true");
    } else {
      newCategory = [...this.state.categories, value];
      console.log(newCategory, "false");
    }

    this.setState({
      categories: newCategory,
    });
  };

  handlerChangeAuthor = (e) => {
    const value = e.currentTarget.value ? e.currentTarget.value : e.currentTarget.defaultValue;
    this.setState({
      author: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    const data = {
      id,
      title: this.state.title,
      content: this.state.content,
      desc: this.state.desc,
      photo: this.state.photo,
      categories: this.state.categories,
      author: this.state.author,
      dateCreated: new Date(Date.now()).toJSON(),
    };
    this.props.onAddNews(data);
  };

  render() {
    const { formVisibility, title, content, desc, photo, categories, author } =
      this.state;
    const hashtags = [
      { id: 1, name: "criminal" },
      { id: 2, name: "government" },
      { id: 3, name: "world" },
      { id: 4, name: "sport" },
    ];
    const authors = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Pavlo Zebrov" },
      { id: 3, name: "Jack London" },
      { id: 4, name: "Dante Alighieri " },
    ];

    return (
      <div>
        <button
          onClick={() => this.setState({ formVisibility: !formVisibility })}
        >
          Add News
        </button>
        {formVisibility ? (
          <form className="add-form" onSubmit={this.handleSubmit}>
            <h3>Add News</h3>
            <div className="add-form__row">
              <label htmlFor="desc">Title:</label>
              <input
                type="text"
                value={title}
                onChange={this.handleChangeText}
                placeholder="title"
                className="add-from__input"
                name="title"
              />
            </div>
            <div className="add-form__row">
              <label htmlFor="desc">Short Description:</label>
              <input
                type="text"
                value={desc}
                onChange={this.handleChangeText}
                placeholder="description"
                className="add-from__input"
                name="desc"
              />
            </div>
            <div className="add-form__row">
              <label htmlFor="content">Content:</label>
              <textarea
                type="text"
                value={content}
                onChange={this.handleChangeText}
                placeholder="content"
                className="add-from__input"
                name="content"
              />
            </div>
            <div className="add-form__row">
              <label htmlFor="pin-photo-btn">Photo:</label>
              {photo && (
                <img
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                  src={photo}
                  alt=""
                />
              )}
              <input
                className="add-form__pin-photo-btn"
                type="file"
                accept=".jpeg,.png,.webp"
                onChange={this.handleChangePhoto}
                name="pin-photo-btn"
              />
            </div>
            <div className="add-form__row">
              <span>Hashtags:</span>
              <div>
                {hashtags.map((item) => {
                  return (
                    <label key={item.id}>
                      {item.name}
                      <input
                        type="checkbox"
                        checked={categories.indexOf(item.name) !== -1}
                        value={item.name}
                        onChange={this.handleChangeCategories}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="add-form__row">
              <span>Author:</span>
              <div>
                <select value={author} onChange={this.handlerChangeAuthor}>
                  {authors.map((item) => (
                    <option
                      key={item.id}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button>Create</button>
          </form>
        ) : null}
      </div>
    );
  }
}
