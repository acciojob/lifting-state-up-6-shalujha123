import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} className={todo.completed ? "completed" : ""}>
              {todo.text}
              {!todo.completed && (
                <input type="button" value="Completed" onClick={() => handleComplete(index)} />
                 
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
