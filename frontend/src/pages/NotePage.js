import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/chevron-left.svg";

const NotePage = () => {
  let { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`/api/notes/${id}`);
      const data = await response.json();
      setNote(data);
    };
    getNote();
  }, [id]);

  const submitHandler = () => {
    updateNote();
    navigate("/");
  };
  const updateNote = async () => {
    await fetch(`/api/notes/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={submitHandler} />
        </h3>
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
