import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-4 pt-4 flex flex-col gap-1 mb-10"
    >
      <h1 className="text-white text-2xl mb-2">Crea tu tarea</h1>
      <input
        className="bg-gray-800 text-white p-2 rounded-xl mb-2"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Escribe tu tarea"
        value={title}
        autoFocus
        required
      />
      <textarea
        className="bg-gray-800 text-white p-2 rounded-xl mb-2"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        value={description}
        required
      ></textarea>
      <button className="bg-green-500 hover:bg-green-400 rounded-xl px-2 py-4 text-white">
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
