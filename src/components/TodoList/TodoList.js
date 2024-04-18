import { TodoItem } from "../TodoItem";

export const TodoList = ({todos , onToggle, onDelete}) => {
  return (
    <ul>
      {todos.map(t => 
        <li key={t.id}>
          <TodoItem 
            todo={t}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        </li>
      )}
    </ul>
  );
}