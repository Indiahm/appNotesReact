import { Fragment, useState } from "react";
import AddNotForm from "./components/AddNoteForm";
import Counter from "./components/Counter";
import Filters from "./components/Filters";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "première note" },
    { id: 2, text: "deuzième note" },
    { id: 3, text: "troisième note" },
  ]);

  function  onRemoveBtnHandler(noteToDelete){
    console.log('click on remove index ', noteToDelete);
    const newNotes = notes.filter(note => note.id !==noteToDelete.id);
    setNotes(newNotes);

  }

  return (
    <>
      <h1>Application Notes</h1>
      <Counter></Counter>
      <AddNotForm></AddNotForm>
      <Filters></Filters>
      <NoteList notes={notes} onRemoveBtn={onRemoveBtnHandler} />
      
    </>
  );
}

export default App;
