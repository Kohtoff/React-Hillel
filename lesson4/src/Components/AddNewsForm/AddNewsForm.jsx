import React, { useRef, useState } from "react";

import { getBase64 } from "../../utils";
import {
  inputValidation,
  fileValidation,
  hashtagValidation,
  authorValidation,
} from "./validation";

export default function AddNewsForm(props) {
  const [isOpen, toggleOpen] = useState(false);
  const [isValid, toggleVaalidation] = useState(false);

  const titleInput = useRef(null);
  const descInput = useRef(null);
  const contentInput = useRef(null);
  const photoInput = useRef(null);
  const authorInput = useRef(null);
  const categoriesInput = [];

  const titleMessage = useRef(null);
  const contentMessage = useRef(null);
  const photoMessage = useRef(null);
  const hashtagMessage = useRef(null);
  const authorMessage = useRef(null);

  const { onSubmit } = props;
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

  let formatedImg;

  const validation = () => {
    inputValidation(titleInput, titleMessage, titleInput.current.value);
    inputValidation(contentInput, contentMessage, contentInput.current.value);
    fileValidation(photoInput, photoMessage, photoInput.current.files[0]);
    hashtagValidation(
      hashtagMessage,
      categoriesInput.filter((item) => item.isActive)
    );
    authorValidation(authorInput, authorMessage, authorInput.current.value);
  };

  const checkValid = () => {
    if (
      !titleMessage.current.textContent &&
      !contentMessage.current.textContent &&
      !photoMessage.current.textContent &&
      !hashtagMessage.current.textContent &&
      !authorMessage.current.textContent
    ) {
      console.log('NOT VVALID IN CHECKVALIDATION');
      toggleVaalidation(false);
    } else {
      toggleVaalidation(true)
    }
  };

  const handleFilterToggle = (id) => {
    const target = categoriesInput.findIndex((obj) => obj.id === id);
    categoriesInput[target].isActive = !categoriesInput[target].isActive;
  };

  const handlePinPhoto = () => {
    console.log(photoInput.current.accept);
    getBase64(photoInput.current.files[0], (base64) => (formatedImg = base64));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    checkValid();
    if (!isValid) {
      console.log("NOT VALID !!!!");
      return;
    }
    const payload = {
      title: titleInput.current.value,
      description: descInput.current.value,
      content: contentInput.current.value,
      photo: formatedImg,
      author: authorInput.current.value,
      dateCreated: new Date(Date.now()).toJSON(),
      id: new Date().getTime().toString(),
      categories: categoriesInput.filter((item) => item.isActive),
    };
    console.log(payload);
    onSubmit(payload);
    toggleOpen(false);
  };

  return (
    <div className="ADD">
      <button onClick={() => toggleOpen(!isOpen)}>Add News</button>
      {isOpen && (
        <form className="add-form" onSubmit={handleSubmit}>
          <h3>Add News</h3>
          <div className="add-form__row" >
            <label htmlFor="desc" ref={titleMessage}>Title:</label>
            <input
              ref={titleInput}
              type="text"
              placeholder="title"
              className="add-from__input"
              name="title"
            />
          </div>
          <div className="add-form__row">
            <label htmlFor="desc">Short Description:</label>
            <input
              ref={descInput}
              type="text"
              placeholder="description"
              className="add-from__input"
              name="desc"
            />
          </div>
          <div className="add-form__row" >
            <label htmlFor="content" ref={contentMessage}>Content:</label>
            <textarea
              ref={contentInput}
              type="text"
              placeholder="content"
              className="add-from__input"
              name="content"
            />
          </div>
          <div className="add-form__row" >
            <label htmlFor="pin-photo-btn" ref={photoMessage}>Photo:</label>
            <input
              ref={photoInput}
              onChange={() => handlePinPhoto()}
              className="add-form__pin-photo-btn"
              type="file"
              accept=".jpeg,.png,.webp"
              name="photo"
            />
          </div>
          <div className="add-form__row" >
            <span ref={hashtagMessage}>Hashtags:</span>
            <div>
              {hashtags.map((item, index) => {
                const { name, id } = item;
                return (
                  <label key={id}>
                    {name}
                    <input
                      type="checkbox"
                      id={id}
                      ref={() => {
                        categoriesInput.push({
                          id,
                          name,
                          isActive: false,
                        });
                      }}
                      value={name}
                      onChange={() => handleFilterToggle(id)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="add-form__row" >
            <span ref={authorMessage}>Author:</span>
            <div>
              <select ref={authorInput}>
                {authors.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button>Create</button>
        </form>
      )}
    </div>
  );
}
