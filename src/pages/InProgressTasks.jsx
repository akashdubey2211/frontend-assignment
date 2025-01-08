import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskTable from "../components/TaskTable";

const InProgressTasks = () => {
  const { tasks, loadTasks } = useContext(TaskContext);

  useEffect(() => {
    loadTasks("in-progress");
  }, [loadTasks]);

  return <TaskTable tasks={tasks} />;
};

export default InProgressTasks;
