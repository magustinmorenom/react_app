import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      <p>Componente 2</p>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
