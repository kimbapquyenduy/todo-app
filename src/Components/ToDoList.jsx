import { ToDo } from "./ToDo"


export const ToDoList = ({todos,toggleToDo,deleteTodo}) => {
   

  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No todo items"}
        {todos.map(todo => {
          return(
            <ToDo  {...todo} key={todo.id} toggleToDo={toggleToDo} deleteTodo={deleteTodo}/>
         )
        })}

      </ul>
    </>
  )
}
