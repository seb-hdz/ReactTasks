import TaskList from "./components/tasks/TaskList";
import TaskForm from "./components/tasks/TaskForm";

function App() {
  return (
    <>
      <main className="bg-black h-screen w-screen">
        <TaskForm />
        <TaskList />
      </main>
    </>
  );
}

export default App;
