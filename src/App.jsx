import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskContextProvider from "./context/TaskContext";
import AppHeader from "./components/Header";
import TaskTabs from "./components/Tabs";

const App = () => {
  return (
    <TaskContextProvider>
      <Router>
        <div>
          <AppHeader />
          <div style={{ padding: "20px", minHeight: "100vh" }}>
            <TaskTabs />
          </div>
        </div>
      </Router>
    </TaskContextProvider>
  );
};

export default App;
