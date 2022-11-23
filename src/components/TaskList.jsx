import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const { tasks } = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="text-red-500 font-bold text-3xl text-center">No hay tarea</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((tasks) => (
        <TaskCard key={tasks.id} task={tasks}  />
      ))}
    </div>
  );
}

export default TaskList;
