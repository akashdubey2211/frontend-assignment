import React, { useState, useContext } from "react";
import { Table, Input, Button, message } from "antd";
import TaskModal from "./TaskModal";
import { TaskContext } from "../context/TaskContext";
import "../assets/styles/TaskTable.css";

const TaskTable = ({ status }) => {
  const { tasks, updateTaskStatus } = useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [sorter, setSorter] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name", sorter: true },
    { title: "Priority", dataIndex: "priority" },
    { title: "Status", dataIndex: "status" },
    { title: "Assignee", dataIndex: "assignee" },
    { title: "Due Date", dataIndex: "dueDate", sorter: true },
    { title: "Comment", dataIndex: "comment" },
    { title: "Created At", dataIndex: "createdAt", sorter: true },
    {
      title: "Actions",
      render: (record) => (
        <Button
          type="link"
          onClick={() => handleOpenModal(record)}
          style={{ color: "#1677ff" }}
        >
          View/Edit
        </Button>
      ),
    },
  ];

  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedTask(null);
  };

  const handleStatusChange = (newStatus, comment) => {
    message.success(`Task status updated to ${newStatus}`);
    updateTaskStatus(selectedTask.id, newStatus, comment);
    handleCloseModal();
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setSorter(sorter);
  };

  const filteredData = tasks
    .filter(
      (task) =>
        task.status === status &&
        task.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sorter.order === "ascend") {
        return a[sorter.field] > b[sorter.field] ? 1 : -1;
      } else if (sorter.order === "descend") {
        return a[sorter.field] < b[sorter.field] ? 1 : -1;
      }
      return 0;
    });

  return (
    <div>
      <Input
        placeholder="Search by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "300px", marginBottom: "16px",marginTop: "16px" }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        onChange={handleTableChange}
      />
      {selectedTask && (
        <TaskModal
          isVisible={isModalVisible}
          task={selectedTask}
          onClose={handleCloseModal}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default TaskTable;
