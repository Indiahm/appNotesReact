export default function NoteList({ notes, onRemoveBtn }) {
  const ListNotes = notes.map((note, index) => (
    <li key={index}>
      {note.text}
      &nbsp;
      <button onClick={(event) => onRemoveBtn(note)}>X</button>
    </li>
  ));

  return (
    <>
      <p>A NOTE LISTE</p>
      <ul>
        {ListNotes}
      </ul>
    </>
  );
}
