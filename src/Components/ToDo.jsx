import React from 'react'

export function ToDo  ({completed,id,title,toggleToDo,deleteTodo})  {
  return (
    <> <li key={id}>
    <label >
      <input type="checkbox" checked={completed} onChange={e=> toggleToDo(id,e.target.checked)} />
      {title}
      <button onClick={()=>deleteTodo(id)}
      >delete</button>
    </label>
  </li>
  </>
  )
}
