***Task Management App***
This app provides a task management system with multiple views, allowing users to manage and track tasks based on their status (Open, In Progress, and Closed). It offers a table-based interface with powerful sorting, search, and keyboard navigation features, making it efficient to interact with the tasks. The app also includes a focus mode (modal view) to view and edit task details, including the ability to change task status and leave comments.

***Features***
Task Views (3 Tabs)

Tabs: Displays three views—Open, In Progress, and Closed tasks.

Each tab displays the count of tasks with its corresponding status.
Open tab is the default view.

***Persistence***: The selected tab remains the same after a page reload.
***Sorting & Search***: Retains sorting and search state when switching tabs.

***Task Table***
Table Columns:
Priority, ID, Status, Labels, Name, Due Date, Created At, Assignee.
Pagination: Supports infinite scroll pagination.
Keyboard Navigation:
Up/Down Arrow Keys: Navigate through the task list.
Enter Key: Open the task in focus mode (modal view).
Global Controls
***Sorting:***
Sort tasks based on the Created At field.
Sorting choice persists after page reload.
Option to clear sorting.

***Search:***
Search tasks by Name.
Search input persists after page reload.
Option to clear search.
Task Status Change
When a task's status changes:
The task is removed from the current tab.
The task appears in the appropriate tab based on the updated status when switching tabs.
Task in Focus Mode (Modal View)
Modal View: When a task is clicked or pressed with Enter, a modal opens displaying the task's details and comments.

***Actions in Modal:***
Task status can be changed to Open, In Progress, or Closed, and vice versa.
A confirmation modal requests the user to add a comment before changing the task status. The comment is task-specific and can be updated if one already exists.
Keyboard Navigation in Modal:

Left/Right Arrow Keys: Navigate between tasks in focus mode.

***Number Keys:***
1: Change task status to Open.
2: Change task status to In Progress.
3: Change task status to Closed.

***Status Change:***
Task remains in focus mode during navigation.
Task remains visible in the current tab after status change.
Task is removed from the background table and correctly placed in the updated tab.

***Technologies Used***
React 19: For building the user interface.
Ant Design: For UI components like tables, modals, and more.
Context API: For global state management (task data, search, sorting, etc.).
Mocked Data: Used mocked data for simulating tasks.


Installation
To run the app locally:

Clone the repository:

```bash
Copy code
git clone [<repository-url>](https://github.com/akashdubey2211/frontend-assignment)
Navigate to the project directory:
```

bash
cd frontend-assignment
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open the app in your browser:

bash
http://localhost:5173/



***Task Management App - Simple System Design***
Purpose:
The app helps manage tasks by showing them in 3 categories: Open, In Progress, and Closed. Users can update the status of tasks, search, and sort them. Tasks can also be viewed in detail in a pop-up window.

1. App Components:
Tabs for Task Status:
There are 3 tabs for tasks: Open, In Progress, and Closed.
The Open tab is selected by default, and the app remembers which tab you choose even after refreshing the page.

***Task Table:***

Shows tasks in a table format.
You can sort tasks by their creation date and search by task name.
The table has infinite scroll, meaning more tasks load as you scroll down.
Task Focus Mode (Modal):

When you click on a task, a pop-up window shows the task details and comments.
You can change the task’s status (Open, In Progress, or Closed) and leave a comment.
2. How It Works:
Tabs: When you click a tab (like Open), it shows tasks of that status. If you change a task’s status (e.g., from Open to In Progress), it moves to the right tab.

***Sorting and Searching:***

You can sort tasks by the date they were created.
You can search tasks by name. These settings stay the same even after you refresh the page.
Focus Mode:

Clicking on a task or pressing Enter opens the task details in a modal (pop-up).
You can change the task’s status in the modal, and leave a comment explaining the change.

3. Storing Data:
The app remembers things like which tab is selected and your search settings using localStorage (so settings stay after a page refresh).
4. Optional Backend:
If you want to store tasks and comments permanently, you can have a backend (server) where tasks are saved. The app would send requests to this server to fetch and update task data.

***Summary:***
The app shows tasks by status (Open, In Progress, Closed).
You can sort and search tasks, and these settings stay even after refreshing.
Clicking on a task opens a detailed view where you can change its status and leave a comment.
The app is built with React and remembers your settings using localStorage.


This design keeps it simple and focused on the task management features you need!

***Feel Free reach out to me for any details - Thank you***
