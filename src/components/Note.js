import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";
  const style = note.important
    ? { color: "red", marginLeft: "5px" }
    : { color: "green", marginLeft: "5px" };
  return (
    <li className="note">
      {note.content}
      <button style={style} onClick={toggleImportance}>
        {label}
      </button>
    </li>
  );
};

export default Note;
