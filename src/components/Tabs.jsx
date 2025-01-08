import React, { useState, useContext, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { TaskContext } from "../context/TaskContext";
import OpenTasks from "../pages/OpenTasks";
import InProgressTasks from "../pages/InProgressTasks";
import ClosedTasks from "../pages/ClosedTasks";

const TabPanel = ({ value, index, children }) => {
  return value === index ? <div>{children}</div> : null;
};

const TaskTabs = () => {
  const { tasks, loadTasks, taskOpenCounts ,taskCloseCounts,taskInprogressCounts} = useContext(TaskContext);
  const [activeTab, setActiveTab] = useState(0);
  // This effect will load tasks for each status once when the component mounts
  useEffect(() => {
    loadTasks("open");
    loadTasks("in-progress");
    loadTasks("closed");
  }, [loadTasks]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="task tabs">
        <Tab label={`Open (${taskOpenCounts || 0})`} />
        <Tab label={`In Progress (${taskCloseCounts || 0})`} />
        <Tab label={`Closed (${taskInprogressCounts || 0})`} />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <OpenTasks />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <InProgressTasks />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <ClosedTasks />
      </TabPanel>
    </div>
  );
};

export default TaskTabs;
