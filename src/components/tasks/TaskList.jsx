import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-4xl text-center text-white">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
