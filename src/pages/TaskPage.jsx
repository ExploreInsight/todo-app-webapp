// TaskPage.js
import React, { useEffect, useState } from "react";
import Task from "./Task"; // The Task component to render individual tasks

function TaskPage() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  console.log(todos.map((todo) => todo.id));

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        }
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []);
  // saving todos to localStorage whenever they change
  useEffect(() => {
    if(todos.length === 0){
      localStorage.removeItem('todos'); // Prevent storing empty values on first load
    }
    else{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  }, [todos]);
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section>
      <h2>Tasks</h2>
      {todos.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#888",
            marginTop: "1.2rem",
          }}
        >
          No tasks added yet!
        </p>
      ) : (
        todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </section>
  );
}

export default TaskPage;
