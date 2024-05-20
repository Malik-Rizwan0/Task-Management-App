import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  
  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
  }, [])

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }])
      setTodo('')
    saveToLocalStorage()
  }

  const handleCheckbox = (e) => {
    const index = parseInt(e.target.name);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocalStorage()
  }

  const handleEdit = (index) => {
    setTodo(todos[index].todo);
    const newTodos = [...todos]; // Make a copy of todos
    newTodos.splice(index, 1); // Remove the todo being edited
    setTodos(newTodos); // Update the todos state
    saveToLocalStorage()
  }
  
  const handleDelete = (index) => {
    let confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const newTodos = todos.filter((_, idx) => idx !== index); // Filter out the todo being deleted
      setTodos(newTodos); // Update the todos state
    }
    saveToLocalStorage()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-orange-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add Task:-</h2>
          <input onChange={handleChange} placeholder='Add Task that you want to do' value={todo} type="text" className=' placeholder:p-1 w-full sm:w-1/2 rounded-sm' />
          <button onClick={handleAdd} disabled={todo.length <= 2} className='disabled:bg-orange-300 w-full my-3 sm:w-auto sm:my-0 bg-orange-600  text-white p-2 py-1 rounded-md text-sm font-bold sm:mx-6 hover:bg-orange-700' >Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Task to do</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No task to Complete</div>}
          {todos.map((item, index) => (

            <div className="todo flex flex-col sm:flex-row w-full sm:w-3/4 md:1/2 h-auto my-3 items-center justify-between text-light" key={index}>
              <div className="flex gap-5 w-11/12  overflow-y">
                <input name={index} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={() => handleEdit(index)} className='bg-orange-600 w-11/12 text-white p-2 py-1 rounded-md text-sm font-bold mx-1 hover:bg-orange-700'>Edit</button>
                <button onClick={() => handleDelete(index)} className='bg-orange-600 w-11/12 text-white p-2 py-1 rounded-md text-sm font-bold mx-1 hover:bg-orange-700'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
