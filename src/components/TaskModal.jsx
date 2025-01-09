import React, { useState } from "react";
import { Modal, Typography, Input, Button, message } from "antd";

const { Text } = Typography;

const TaskModal = ({ isVisible, task, onClose, onStatusChange }) => {
  const [newStatus, setNewStatus] = useState(task ? task.status : "Open");
  const [comment, setComment] = useState(task ? task.comment : "");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleStatusChange = (status) => {
    setNewStatus(status);
    setShowConfirmModal(true);  // Show confirmation modal when status is changed
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleConfirmStatusChange = () => {
    // Ensure comment exists and is a valid string
    if (!comment || !comment.trim()) {
      message.error("Comment is required.");
      return;
    }
  
    onStatusChange(newStatus, comment); // Trigger the status change
    setShowConfirmModal(false); // Close the confirmation modal
    onClose(); // Close the task modal
  };
  
  const handleCancelStatusChange = () => {
    setShowConfirmModal(false);  // Close confirmation modal if canceled
  };

  return (
    <>
      <Modal
        title="Task Details"
        open={isVisible}
        onCancel={onClose}
        footer={null}
        centered
        width={500}
        style={{ borderRadius: "8px" }}
      >
        {task && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>ID:</strong>
                <p style={{ margin: "4px 0", color: "#333", fontSize: "14px" }}>
                  {task.id}
                </p>
              </div>
              <div>
                <strong>Name:</strong>
                <p style={{ margin: "4px 0", color: "#333", fontSize: "14px" }}>
                  {task.name}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>Status:</strong>
                <p
                  style={{
                    margin: "4px 0",
                    color:
                      newStatus === "Open"
                        ? "#52c41a"
                        : newStatus === "In Progress"
                        ? "#faad14"
                        : "#ff4d4f",
                    fontSize: "14px",
                  }}
                >
                  {newStatus}
                </p>
                <Button
                  onClick={() => handleStatusChange("Open")}
                  style={{ margin: "4px", width: "70px" }}
                >
                  Open
                </Button>
                <Button
                  onClick={() => handleStatusChange("In Progress")}
                  style={{ margin: "4px", width: "120px" }}
                >
                  In Progress
                </Button>
                <Button
                  onClick={() => handleStatusChange("Closed")}
                  style={{ margin: "4px", width: "80px" }}
                >
                  Closed
                </Button>
              </div>

              <div>
                <strong>Assignee:</strong>
                <p style={{ margin: "4px 0", color: "#333", fontSize: "14px" }}>
                  {task.assignee}
                </p>
              </div>
            </div>

            <div>
              <strong>Comments:</strong>
              <div style={{ marginTop: "8px" }}>
                {task.comment ? (
                  <p
                    style={{
                      backgroundColor: "#f5f5f5",
                      padding: "8px",
                      borderRadius: "4px",
                      marginBottom: "8px",
                      fontSize: "14px",
                    }}
                  >
                    {task.comment}
                  </p>
                ) : (
                  <p style={{ color: "#888", fontSize: "14px" }}>No comments available.</p>
                )}
                <Input
                  type="text"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment"
                />
              </div>
            </div>

            {/* Confirmation Modal for Status Change */}
            <Modal
              title="Confirm Status Change"
              open={showConfirmModal}
              onOk={handleConfirmStatusChange}
              onCancel={handleCancelStatusChange}
              okText="Confirm"
              cancelText="Cancel"
            >
              <p>
                Are you sure you want to change the status to{" "}
                <strong>{newStatus}</strong>?
              </p>
              <p>Comment: {comment}</p>
            </Modal>

            {/* Update Button */}
            <div style={{ textAlign: "right", marginTop: "12px" }}>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => onStatusChange(newStatus, comment)}
              >
                Update Task
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TaskModal;
