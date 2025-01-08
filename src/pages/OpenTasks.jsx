import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskTable from "../components/TaskTable";

const OpenTasks = () => {
  const { tasks, loadTasks } = useContext(TaskContext);

  useEffect(() => {
    loadTasks("open");
  }, [loadTasks]);

  return <TaskTable tasks={tasks} />;
};

export default OpenTasks;
