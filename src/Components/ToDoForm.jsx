import React, { useState } from 'react'

export function ToDoForm ({addTodo}) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem ==="") return

        addTodo(newItem)

        setNewItem("")
      }
  return (
    <>
     <form onSubmit={handleSubmit}>
        <h1>Todo App</h1>
        <br />
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
        <button>
          Add
        </button>
      </form>
    </>
  )
}
