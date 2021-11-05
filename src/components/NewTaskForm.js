import React from "react";

function NewTaskForm({ categories, errors, onTaskFormSubmit, onHandleSelectChange, onHandleTextChange, name, category }) {
  
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={name} onChange={onHandleTextChange} />
      </label>
      {errors.length > 0 ? errors.map((err, indx) => (
        <p key={indx} style={{ color: "red" }}>{err}</p>
      )): null}     
      <label>
        Category
        <select name="category" value={category} onChange={onHandleSelectChange}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
