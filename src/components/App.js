import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    {
      text: "Build a React app",
      completed: false,
    },
    {
      text: "Deploy the React app",
      completed: false,
    },
  ]);

  function handleComplete(indexToUpdate) {
    let newTodos = todos.map((todo,index)=> {
      if(index === indexToUpdate){
        return {...todo, completed: true}
      }
      return todo
    })
    setTodos(newTodos);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
