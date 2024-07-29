import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
 
function App() {
  const [todos,SetTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  // .then( async function (res) {
  //   const jsonfmt = await res.json();
  //   SetTodos(jsonfmt.todos) 
    
  // })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} setodo = {SetTodos}></Todos>
    </div>
  )
}

export default App
