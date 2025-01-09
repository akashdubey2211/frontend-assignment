import React, { createContext, useState, useCallback } from "react";
import staticTasks from "./staticTasks";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  // Static data for tasks
 

  const loadTasks = useCallback((status) => {
    const filteredTasks = staticTasks.filter(task => task.status === status);
    setTasks(filteredTasks);
  }, []);

  
  const getTaskCounts = () => {
    const taskCounts = {
      total: staticTasks.length,
      open: staticTasks.filter(task => task.status === "open").length,
      inProgress: staticTasks.filter(task => task.status === "in-progress").length,
      closed: staticTasks.filter(task => task.status === "closed").length
    };
    return taskCounts;
  };
  let result = getTaskCounts();
  return (
    <TaskContext.Provider value={{ tasks, loadTasks,taskOpenCounts:result.open,taskCloseCounts:result.closed,taskInprogressCounts:result.inProgress,}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
