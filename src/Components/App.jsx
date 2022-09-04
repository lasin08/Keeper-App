import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function onAdd(input) {
    setNotes((prevValue) => {
      return [...prevValue, input];
    });
    console.log(notes);
  }

  function onDelete(id) {
    setNotes((prevLists) => {
      return prevLists.filter((list, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={onAdd} />

      {notes.map((note, index) => {
        return (
          <Note
            delete={onDelete}
            key={index}
            title={note.title}
            id={index}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;
