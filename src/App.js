import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./TaskList";
import AddTasksForm from "./AddTasksForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: false },
    { id: "task_2", title: "Code", status: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };
  const handleShowCompleted = (e) => {
    setShowCompleted(e.target.checked);
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get one item done at a time" />
      <TaskList
        key={tasks.id}
        tasks={tasks}
        showCompleted={showCompleted}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        handleShowCompleted={handleShowCompleted}
      />
      <AddTasksForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
