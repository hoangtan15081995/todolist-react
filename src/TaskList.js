import React from "react";
import ListItem from "./ListItem";

function TaskList({
  tasks,
  showCompleted,
  setTaskStatus,
  removeTask,
  handleShowCompleted,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showCompleted ? task.status === false : true))
          .map((task) => (
            <ListItem
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showCompleted}
          onChange={handleShowCompleted}
        />
      </div>
    </>
  );
}

export default TaskList;
