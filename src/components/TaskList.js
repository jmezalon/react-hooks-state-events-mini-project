import Task from './Task'

function TaskList({ tasks, categorySelection, setTodo }) {  

  function handleDelete(obj) {
    const updatedTask = tasks.filter(task => task.text !== obj.text)
    setTodo(updatedTask)
  }

  const taskListDisplay = tasks.filter(task => {
    if(categorySelection === "All") {
      return true
    } else {
      return task.category === categorySelection
    }
  })

  return (
    <div className="tasks">
      {taskListDisplay.map(task => <Task onHandleDelete={handleDelete} key={task.text} taskObj={task} />)}
    </div>
  );
}

export default TaskList;
