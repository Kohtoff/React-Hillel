import {React, useState} from "react";
import "./App.css";
import AddNoteForm from "./components/AddNote/AddNote";
import Navbar from "./components/Navbar/Navbar";
import NoteList from "./components/noteList/noteList";

function App() {
  const pageArr = ["Notes", "News", "contacts"];
  const testNote = [
    {
      title: 'First note',
      description: 'Wow, it`s first note ever. It`s a unique chance to meet first note. I think it may could overlap with dinos, you know?'
    },
    {
      title: 'Second note',
      description: 'Yep. It`s not as cool as first note, but still good enough'
    },
    {
      title: 'Third note',
      description: 'It`s third note, dude. So, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ex animi est.'
    }
  ];
  const [lists, setLists] = useState(testNote);

  const addList = (obj) => {
    const newList = [obj, ...lists];
    setLists(newList);
  };

  return (
    <div className="container">
      <aside className="aside">
        <h1 className="main-title">Lesson 1</h1>
        <Navbar itemList={pageArr} />
        <AddNoteForm onAdd={addList} />
      </aside>
      <main className='main'>
        <NoteList items={lists} />
      </main>
    </div>
  );
}

export default App;
