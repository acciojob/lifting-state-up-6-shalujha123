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
                <button
                  data-testid={`complete-btn-${index}`}
                  onClick={() => handleComplete(index)}
                >
                  Complete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
