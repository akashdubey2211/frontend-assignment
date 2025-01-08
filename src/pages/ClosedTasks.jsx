import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskTable from "../components/TaskTable";

const ClosedTasks = () => {
  const { tasks, loadTasks } = useContext(TaskContext);

  useEffect(() => {
    loadTasks("closed");
  }, [loadTasks]);

  return <TaskTable tasks={tasks} />;
};

export default ClosedTasks;
