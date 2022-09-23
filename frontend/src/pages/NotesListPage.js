import React, { useState, useEffect } from "react";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/notes/");
    const data = await response.json();
    console.log("DATA:", data);
    setNotes(data);
  };

  return <div>Notes</div>;
};

export default NotesListPage;
