import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.text}
              {!todo.completed && (
                <button onClick={() => handleComplete(index)}>Complete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
