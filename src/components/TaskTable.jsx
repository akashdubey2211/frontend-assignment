import React, { useState, useEffect } from "react";
import { Table, Input, Button, Spin, message } from "antd";
import TaskModal from "./TaskModal"; // Import the TaskModal
import "../assets/styles/TaskTable.css";

const TaskTable = ({ tasks, fetchMoreTasks }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery") || "");
  const [sortOrder, setSortOrder] = useState(localStorage.getItem("sortOrder") || "ascend");
  const [sortedData, setSortedData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Priority", dataIndex: "priority" },
    { title: "Status", dataIndex: "status" },
    { title: "Assignee", dataIndex: "assignee" },
    { title: "Due Date", dataIndex: "dueDate" },
    { title: "Comment", dataIndex: "comment" },
    { title: "Created At", dataIndex: "createdAt" },
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

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;

    if (bottom && !loading) {
      setLoading(true);
      fetchMoreTasks()
        .then((newTasks) => {
          setData((prevData) => [...prevData, ...newTasks]);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    localStorage.setItem("searchQuery", e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    localStorage.setItem("sortOrder", order);
  };

  const handleClearSort = () => {
    setSortOrder("ascend");
    localStorage.removeItem("sortOrder");
  };

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
    // Update the task status and comment in the table
    const updatedTasks = data.map((task) =>
      task.id === selectedTask.id ? { ...task, status: newStatus, comment } : task
    );
    setData(updatedTasks);
    handleCloseModal();
  };

  useEffect(() => {
    // Apply search filter
    const filteredData = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort the data based on "Created At"
    const sortedFilteredData = filteredData.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "ascend" ? dateA - dateB : dateB - dateA;
    });

    setSortedData(sortedFilteredData);
  }, [tasks, searchQuery, sortOrder]);

  useEffect(() => {
    setData(tasks);
  }, [tasks]);

  return (
    <div style={{ overflowY: "auto", height: "400px" }} onScroll={handleScroll}>
      <div style={{ marginBottom: "16px", marginTop: "16px" }}>
        <Input
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "200px", marginRight: "8px" }}
        />
        <Button onClick={handleClearSearch} style={{ marginRight: "8px" }}>
          Clear Search
        </Button>
        <Button
          onClick={() => handleSortChange(sortOrder === "ascend" ? "descend" : "ascend")}
        >
          Sort by Created At ({sortOrder === "ascend" ? "Ascending" : "Descending"})
        </Button>
        <Button onClick={handleClearSort} style={{ marginLeft: "8px" }}>
          Clear Sort
        </Button>
      </div>
      <Table
        style={{ margin: "8px 0px" }}
        dataSource={sortedData}
        columns={columns}
        rowKey="id"
        pagination={false}
        footer={() => loading && <Spin />}
      />
      {/* Task Modal */}
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
