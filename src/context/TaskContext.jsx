import React, { createContext, useState, useCallback } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  // Static data for tasks
  const staticTasks = [
    { id: 1, name: "Task 1", status: "open", priority: "high", assignee: "User A", dueDate: "2025-01-15", createdAt: "2025-01-01" },
    { id: 2, name: "Task 2", status: "in-progress", priority: "medium", assignee: "User B", dueDate: "2025-02-10", createdAt: "2025-01-02" },
    { id: 3, name: "Task 3", status: "closed", priority: "low", assignee: "User C", dueDate: "2025-03-01", createdAt: "2025-01-05" },
    { id: 4, name: "Task 4", status: "open", priority: "high", assignee: "User D", dueDate: "2025-01-20", createdAt: "2025-01-07" },
    { id: 5, name: "Task 5", status: "in-progress", priority: "medium", assignee: "User E", dueDate: "2025-02-25", createdAt: "2025-01-10" },
    { id: 6, name: "Task 6", status: "closed", priority: "low", assignee: "User F", dueDate: "2025-03-05", createdAt: "2025-01-12" },
    { id: 7, name: "Task 7", status: "open", priority: "high", assignee: "User G", dueDate: "2025-01-30", createdAt: "2025-01-14" },
    { id: 8, name: "Task 8", status: "in-progress", priority: "medium", assignee: "User H", dueDate: "2025-02-15", createdAt: "2025-01-16" },
    { id: 9, name: "Task 9", status: "closed", priority: "low", assignee: "User I", dueDate: "2025-03-10", createdAt: "2025-01-18" },
    { id: 10, name: "Task 10", status: "open", priority: "high", assignee: "User J", dueDate: "2025-02-01", createdAt: "2025-01-20" },
    { id: 11, name: "Task 11", status: "in-progress", priority: "medium", assignee: "User K", dueDate: "2025-02-20", createdAt: "2025-01-22" },
    { id: 12, name: "Task 12", status: "closed", priority: "low", assignee: "User L", dueDate: "2025-03-15", createdAt: "2025-01-25" },
    { id: 13, name: "Task 13", status: "open", priority: "high", assignee: "User M", dueDate: "2025-02-05", createdAt: "2025-01-28" },
    { id: 14, name: "Task 14", status: "in-progress", priority: "medium", assignee: "User N", dueDate: "2025-02-25", createdAt: "2025-01-30" },
    { id: 15, name: "Task 15", status: "closed", priority: "low", assignee: "User O", dueDate: "2025-03-20", createdAt: "2025-02-02" },
    { id: 16, name: "Task 16", status: "open", priority: "high", assignee: "User P", dueDate: "2025-02-10", createdAt: "2025-02-05" },
    { id: 17, name: "Task 17", status: "in-progress", priority: "medium", assignee: "User Q", dueDate: "2025-03-01", createdAt: "2025-02-08" },
    { id: 18, name: "Task 18", status: "closed", priority: "low", assignee: "User R", dueDate: "2025-03-25", createdAt: "2025-02-10" },
    { id: 19, name: "Task 19", status: "open", priority: "high", assignee: "User S", dueDate: "2025-02-15", createdAt: "2025-02-12" },
    { id: 20, name: "Task 20", status: "in-progress", priority: "medium", assignee: "User T", dueDate: "2025-03-05", createdAt: "2025-02-15" },
    { id: 21, name: "Task 21", status: "open", priority: "high", assignee: "User U", dueDate: "2025-02-20", createdAt: "2025-02-18" },
    { id: 22, name: "Task 22", status: "in-progress", priority: "medium", assignee: "User V", dueDate: "2025-03-10", createdAt: "2025-02-20" },
    { id: 23, name: "Task 23", status: "closed", priority: "low", assignee: "User W", dueDate: "2025-03-30", createdAt: "2025-02-25" },
    { id: 24, name: "Task 24", status: "open", priority: "high", assignee: "User X", dueDate: "2025-02-25", createdAt: "2025-02-28" },
    { id: 25, name: "Task 25", status: "in-progress", priority: "medium", assignee: "User Y", dueDate: "2025-03-15", createdAt: "2025-03-01" },
    { id: 26, name: "Task 26", status: "closed", priority: "low", assignee: "User Z", dueDate: "2025-04-01", createdAt: "2025-03-03" },
    { id: 27, name: "Task 27", status: "open", priority: "high", assignee: "User AA", dueDate: "2025-03-10", createdAt: "2025-03-05" },
    { id: 28, name: "Task 28", status: "in-progress", priority: "medium", assignee: "User AB", dueDate: "2025-04-05", createdAt: "2025-03-07" },
    { id: 29, name: "Task 29", status: "closed", priority: "low", assignee: "User AC", dueDate: "2025-04-15", createdAt: "2025-03-10" },
    { id: 30, name: "Task 30", status: "open", priority: "high", assignee: "User AD", dueDate: "2025-03-20", createdAt: "2025-03-12" },
    { id: 31, name: "Task 31", status: "in-progress", priority: "medium", assignee: "User AE", dueDate: "2025-04-10", createdAt: "2025-03-15" },
    { id: 32, name: "Task 32", status: "closed", priority: "low", assignee: "User AF", dueDate: "2025-04-20", createdAt: "2025-03-18" },
    { id: 33, name: "Task 33", status: "open", priority: "high", assignee: "User AG", dueDate: "2025-03-25", createdAt: "2025-03-20" },
    { id: 34, name: "Task 34", status: "in-progress", priority: "medium", assignee: "User AH", dueDate: "2025-04-25", createdAt: "2025-03-22" },
    { id: 35, name: "Task 35", status: "closed", priority: "low", assignee: "User AI", dueDate: "2025-05-01", createdAt: "2025-03-25" },
    { id: 36, name: "Task 36", status: "open", priority: "high", assignee: "User AJ", dueDate: "2025-04-01", createdAt: "2025-03-28" },
    { id: 37, name: "Task 37", status: "in-progress", priority: "medium", assignee: "User AK", dueDate: "2025-04-05", createdAt: "2025-03-30" },
    { id: 38, name: "Task 38", status: "closed", priority: "low", assignee: "User AL", dueDate: "2025-04-10", createdAt: "2025-04-02" },
    { id: 39, name: "Task 39", status: "open", priority: "high", assignee: "User AM", dueDate: "2025-04-15", createdAt: "2025-04-05" },
    { id: 40, name: "Task 40", status: "in-progress", priority: "medium", assignee: "User AN", dueDate: "2025-04-20", createdAt: "2025-04-08" },
    { id: 41, name: "Task 41", status: "closed", priority: "low", assignee: "User AO", dueDate: "2025-05-05", createdAt: "2025-04-10" },
    { id: 42, name: "Task 42", status: "open", priority: "high", assignee: "User AP", dueDate: "2025-04-25", createdAt: "2025-04-12" },
    { id: 43, name: "Task 43", status: "in-progress", priority: "medium", assignee: "User AQ", dueDate: "2025-05-10", createdAt: "2025-04-15" },
    { id: 44, name: "Task 44", status: "closed", priority: "low", assignee: "User AR", dueDate: "2025-05-15", createdAt: "2025-04-18" },
    { id: 45, name: "Task 45", status: "open", priority: "high", assignee: "User AS", dueDate: "2025-05-01", createdAt: "2025-04-20" },
    { id: 46, name: "Task 46", status: "in-progress", priority: "medium", assignee: "User AT", dueDate: "2025-05-20", createdAt: "2025-04-22" },
    { id: 47, name: "Task 47", status: "closed", priority: "low", assignee: "User AU", dueDate: "2025-06-01", createdAt: "2025-04-25" },
    { id: 48, name: "Task 48", status: "open", priority: "high", assignee: "User AV", dueDate: "2025-05-05", createdAt: "2025-04-28" },
    { id: 49, name: "Task 49", status: "in-progress", priority: "medium", assignee: "User AW", dueDate: "2025-05-15", createdAt: "2025-05-01" },
    { id: 50, name: "Task 50", status: "closed", priority: "low", assignee: "User AX", dueDate: "2025-06-05", createdAt: "2025-05-03" },
    { id: 51, name: "Task 51", status: "open", priority: "high", assignee: "User AY", dueDate: "2025-05-10", createdAt: "2025-05-05" },
    { id: 52, name: "Task 52", status: "in-progress", priority: "medium", assignee: "User AZ", dueDate: "2025-05-25", createdAt: "2025-05-08" },
    { id: 53, name: "Task 53", status: "closed", priority: "low", assignee: "User BA", dueDate: "2025-06-10", createdAt: "2025-05-10" },
    { id: 54, name: "Task 54", status: "open", priority: "high", assignee: "User BB", dueDate: "2025-06-01", createdAt: "2025-05-13" },
    { id: 55, name: "Task 55", status: "in-progress", priority: "medium", assignee: "User BC", dueDate: "2025-06-15", createdAt: "2025-05-15" },
    { id: 56, name: "Task 56", status: "closed", priority: "low", assignee: "User BD", dueDate: "2025-06-20", createdAt: "2025-05-18" },
    { id: 57, name: "Task 57", status: "open", priority: "high", assignee: "User BE", dueDate: "2025-06-25", createdAt: "2025-05-20" },
    { id: 58, name: "Task 58", status: "in-progress", priority: "medium", assignee: "User BF", dueDate: "2025-07-01", createdAt: "2025-05-23" },
    { id: 59, name: "Task 59", status: "closed", priority: "low", assignee: "User BG", dueDate: "2025-07-05", createdAt: "2025-05-25" },
    { id: 60, name: "Task 60", status: "open", priority: "high", assignee: "User BH", dueDate: "2025-07-10", createdAt: "2025-05-28" },
    { id: 61, name: "Task 61", status: "in-progress", priority: "medium", assignee: "User BI", dueDate: "2025-07-15", createdAt: "2025-06-01" },
    { id: 62, name: "Task 62", status: "closed", priority: "low", assignee: "User BJ", dueDate: "2025-07-20", createdAt: "2025-06-03" },
    { id: 63, name: "Task 63", status: "open", priority: "high", assignee: "User BK", dueDate: "2025-07-25", createdAt: "2025-06-05" },
    { id: 64, name: "Task 64", status: "in-progress", priority: "medium", assignee: "User BL", dueDate: "2025-08-01", createdAt: "2025-06-08" },
    { id: 65, name: "Task 65", status: "closed", priority: "low", assignee: "User BM", dueDate: "2025-08-05", createdAt: "2025-06-10" },
    { id: 66, name: "Task 66", status: "open", priority: "high", assignee: "User BN", dueDate: "2025-08-10", createdAt: "2025-06-12" },
    { id: 67, name: "Task 67", status: "in-progress", priority: "medium", assignee: "User BO", dueDate: "2025-08-15", createdAt: "2025-06-15" },
    ]; 
  

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
