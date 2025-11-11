import React from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧠 TaskFlow Pro</h1>
      <p>Organize suas tarefas e melhore sua produtividade!</p>
      <TaskList />
    </div>
  );
}

export default App;
