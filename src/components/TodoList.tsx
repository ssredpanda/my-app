import React from 'react';
import './TodoList.css'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = prpos => {
  return (
    <ul>
      {prpos.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={prpos.onDeleteTodo.bind(null, todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
