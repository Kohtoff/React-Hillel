import React, { useState } from "react";
import "./AddNote.css";

const AddNote = ({ onAdd }) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [noteData, setNoteData] = useState({title: '', description: ''});
  const toggleForm = () => {
    setFormVisibility(!formVisibility)
    setNoteData(null)
  };
  const addNote = (e) => {
    e.preventDefault();
    const note = {
      ...noteData
    }
    console.log(note);

    onAdd(note);
    setNoteData(null);
    setFormVisibility(false)
  };

  return (
    <React.Fragment>
      <button onClick={toggleForm} className="show-form-btn transited ">
        + Add note
      </button>
      {formVisibility ? (
        <form className="add-note-form">
          <span className="add-note-form__title">New note</span>
          <input
            className="add-note-form__input transited"
            type="text"
            placeholder="Title"
            name="title"
            onChange={({ target }) =>
              setNoteData({ ...noteData, title: target.value })
            }
          />
          <input
            className="add-note-form__input transited"
            type="text"
            placeholder="Description"
            name="description"
            onChange={({ target }) =>
              setNoteData({ ...noteData, description: target.value })
            }
          />
          <button onClick={addNote} className="add-note-form__submit transited">
            Confirm
          </button>
        </form>
      ) : null}
    </React.Fragment>
  );
};

export default AddNote;
