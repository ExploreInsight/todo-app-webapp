import React, { useEffect, useState , } from "react";
import '../styles/Home.css';
import Task from "./Task";


function Home() {
  const [item, setItem] = useState("");
   const [todos, setTodos] = useState(() => {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    });

  // load todos from localstrogae when the compoent mounts
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos)
        setTodos(storedTodos)
  },[])


//saving todos to localStorgae whenever they change
useEffect(() => {
  if (todos.length === 0) {
    localStorage.removeItem('todos') // Prevent storing empty values on first load
  }
  else{
    localStorage.setItem("todos", JSON.stringify(todos));

  }
}, [todos]);


  function sbumitHandler(e) {
    e.preventDefault();
    if (item.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        todo: item,
        completed:false
      },
    ]);
    setItem("");
  }

  function toggleTodo(id){
    setTodos(todos.map((todo)=>
    todo.id === id ?{ ...todo,completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) =>{
   setTodos(todos.filter((todo)=>todo.id !== id))

  }
  return (
    <>
    
      <section>
        <form onSubmit={sbumitHandler}>
          
          <label htmlFor="todo"><h2>Todo</h2></label>
          <input
            name="todo"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
          />
          {/* <label htmlFor="description" > Description:</label> */}
          {/* <input type="textarea" value={item} onChange={(e)=>setItem(e.target.value)}/> */}
          <button >
            Add Task
        </button>
        </form>
      </section>
      <section>
      <h2>Tasks</h2>
        {todos.length === 0 ? (
          <p className="no-tasks">No tasks added yet!</p>
        ) : (
          todos.map((todo) => (
            // <div
            //   key={todo.id}
            //   className={`task ${todo.completed ? "task-completed" : ""}`}
            // >
            //   <p>
            //     <input
            //       type="checkbox"
            //       checked={todo.completed}
            //       onChange={() => toggleTodo(todo.id)}
            //     />
            //     {todo.todo}
            //   </p>
            //   <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            // </div>
            <Task
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}/>
          ))
        )}
      </section>
    </>
  );
}

export default Home;

// import React, { useState } from 'react'

// function Home() {
//     const [todo, setTodo] = useState('')
//     const [todos, setTodos] = useState([])

//     function submitHandler(e){
//         e.preventDefault();
//         if(todo.trim()===""){
//             alert("Enter the field")
//             return;
//         }
//         setTodos([...todos,{
//             id:crypto.randomUUID(),todo:todo,completed:false
//         }])
//         console.log(todos)

//         setTodo('') //earsing the last entery on the submiison
//     }
//   return (
//    <>
//    <form onSubmit={submitHandler}>
//     <input type="text" name='todo' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="todo...."/>
//     <button> Add </button>
//    </form>

//    <div>
//       {todos.map((todo)=>
//         <div key={todo.id}>
//            <h1>{todo.todo}</h1>
//             </div>
//     )}
//    </div>
//    </>
//   )
// }

// export default Home
