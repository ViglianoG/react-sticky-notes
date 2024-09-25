import Trash from "../icons/Trash.jsx";
import { db } from "../appwrite/databases.js";

const DeleteButton = ({ noteId, setNotes }) => {
  const handleDelete = async (e) => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
