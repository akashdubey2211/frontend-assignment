import React, { useState, useContext } from "react";
import { Tabs } from "antd";
import { TaskContext } from "../context/TaskContext";
import TaskTable from "./TaskTable";

const { TabPane } = Tabs;

const TaskTabs = () => {
  const { taskOpenCounts, taskInprogressCounts, taskCloseCounts } = useContext(TaskContext);
  const [activeTab, setActiveTab] = useState("open");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab={`Open (${taskOpenCounts})`} key="open">
          <TaskTable status="open" />
        </TabPane>
        <TabPane tab={`In Progress (${taskInprogressCounts})`} key="in-progress">
          <TaskTable status="in-progress" />
        </TabPane>
        <TabPane tab={`Closed (${taskCloseCounts})`} key="closed">
          <TaskTable status="closed" />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TaskTabs;
