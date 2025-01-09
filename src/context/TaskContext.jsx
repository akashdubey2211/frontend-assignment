import React, { createContext, useState, useCallback } from "react";
import staticTasks from "./staticTasks";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(staticTasks);

  const loadTasks = useCallback((status) => {
    const filteredTasks = staticTasks.filter((task) => task.status === status);
    setTasks(filteredTasks);
  }, []);

  const getTaskCounts = () => {
    const taskCounts = {
      total: staticTasks.length,
      open: staticTasks.filter((task) => task.status === "open").length,
      inProgress: staticTasks.filter((task) => task.status === "in-progress").length,
      closed: staticTasks.filter((task) => task.status === "closed").length,
    };
    return taskCounts;
  };

  const updateTaskStatus = (taskId, newStatus, comment) => {
    const updatedTasks = staticTasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus, comment } : task
    );
    setTasks(updatedTasks);
  };

  const taskCounts = getTaskCounts();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        updateTaskStatus,
        taskOpenCounts: taskCounts.open,
        taskCloseCounts: taskCounts.closed,
        taskInprogressCounts: taskCounts.inProgress,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
