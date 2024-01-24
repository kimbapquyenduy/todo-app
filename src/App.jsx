import { useEffect } from 'react';
import { useState } from 'react'
import { ToDoForm } from './Components/ToDoForm';
import { ToDoList } from './Components/ToDoList';

function App() {
  const [todos, settodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue);
  });
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])
  function addTodo(title) {
    settodos(currentTodos => {
          return [
            ...currentTodos, {
              id: crypto.randomUUID(), title, competed: false
            },
          ]
        })
  }
  function toggleToDo(id,completed) {
      settodos(currentTodos => {
        return currentTodos.map(todo =>{
          if(todo.id === id) {
            return {...todo, completed}
        
        }
        return todo
      })
      })
    }
    function deleteTodo(id) {
      settodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }
  return (
    <>
   <ToDoForm addTodo= {addTodo}/>

    <ToDoList todos={todos} toggleToDo={toggleToDo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
