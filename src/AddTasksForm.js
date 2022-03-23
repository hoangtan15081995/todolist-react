import React from "react";

function AddTasksForm({ handleSubmit, newTask, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <input type="text" id="newitem" value={newTask} onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTasksForm;
