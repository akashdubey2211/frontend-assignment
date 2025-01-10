import React, { createContext, useState, useCallback, useMemo } from "react";
import staticTasks from "./staticTasks";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(staticTasks);

  const loadTasks = useCallback((status) => {
    const filteredTasks = tasks.filter((task) => task.status === status);
    setTasks(filteredTasks);
  }, [tasks]);

  const updateTaskStatus = (taskId, newStatus, comment) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus, comment } : task
    );
    setTasks(updatedTasks);
  };

  const taskCounts = useMemo(() => {
    return {
      total: tasks.length,
      open: tasks.filter((task) => task.status === "open").length,
      inProgress: tasks.filter((task) => task.status === "in-progress").length,
      closed: tasks.filter((task) => task.status === "closed").length,
    };
  }, [tasks]);

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
