import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categorySelection, setCategorySelection] = useState("All")
  const [name, setName] = useState("")
  const [category, setCategory] = useState('All')
  const [todo, setTodo] = useState(TASKS)
  const [errors, setErrors] = useState([])

  function handleClick(e) {
    setCategorySelection(e.target.innerText)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (name.length > 0) {
      const newTodo = {
        text: name, 
        category: category
      }
      setTodo([...todo, newTodo])
      setName("")
      setCategory("All")
      setErrors([])
    } else {
      setErrors(["**required**"])
    }
  }

  function handleTextChange(e) {
    setName(e.target.value)
    setErrors([])
  }

  function handleSelectChange(e) {
    setCategory(e.target.value)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        onHandleClick={handleClick} 
        categorySelection={categorySelection} 
        categories={CATEGORIES} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onHandleTextChange={handleTextChange} 
        onHandleSelectChange={handleSelectChange} 
        onTaskFormSubmit={handleSubmit} 
        name={name} 
        category={category} 
        errors={errors}
      />
      <TaskList 
        tasks={todo} 
        setTodo={setTodo}
        categorySelection={categorySelection} 
      />
    </div>
  );
}

export default App;
