// generateMockTasks.js
const generateMockTasks = () => {
    const statuses = ["open", "in-progress", "closed"];
    const priorities = ["high", "medium", "low"];
    const assignees = ["User A", "User B", "User C", "User D", "User E"];
    
    let tasks = [];
    for (let i = 1; i <= 100; i++) {
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomPriority = priorities[Math.floor(Math.random() * priorities.length)];
      const randomAssignee = assignees[Math.floor(Math.random() * assignees.length)];
      const randomDueDate = new Date(
        Date.now() + Math.floor(Math.random() * 10000000000) // Random due date
      ).toISOString().split('T')[0];
      const randomCreatedAt = new Date(
        Date.now() - Math.floor(Math.random() * 10000000000) // Random created date
      ).toISOString().split('T')[0];
      
      tasks.push({
        id: i,
        name: `Task ${i}`,
        status: randomStatus,
        priority: randomPriority,
        assignee: randomAssignee,
        dueDate: randomDueDate,
        createdAt: randomCreatedAt,
      });
    }
    return tasks;
  };
  
  export default generateMockTasks;
  