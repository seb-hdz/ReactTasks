import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl">
      <h1 className="font-bold mb-2">{task.title}</h1>
      <p className="text-gray-300 font-mono text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-4 py-2 rounded-xl mt-2 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
