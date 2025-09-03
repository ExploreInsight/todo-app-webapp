import React from 'react'


function Task({todo, toggleTodo , deleteTodo}) {
    if (!todo) return null;
    
  return (
    <>
          <div className={`task ${todo.completed ? "task-completed" : ""}`}>
              <p>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.todo}
              </p>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        
    </>
  )
}

export default Task