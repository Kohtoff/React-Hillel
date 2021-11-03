import React from "react";
import "./App.css";
import AddNoteForm from "./components/AddNote/AddNote";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const pageArr = ["home", "about us", "contacts"];
  return (
    <div className="container">
      <aside className="aside">
        <h1 className="main-title">Lesson 1</h1>
        <Navbar itemList={pageArr} />
        <AddNoteForm />
      </aside>
    </div>
  );
}

export default App;
