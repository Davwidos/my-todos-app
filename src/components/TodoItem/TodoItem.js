import './TodoItem.css'

export const TodoItem = ({todo, onToggle, onDelete}) => {

  const handleToggle = () => onToggle(todo.id);
  const handleDelete = () => onDelete(todo.id);

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={todo.complete} onChange={handleToggle}/>
      <p>
        {todo.title}
      </p>
      <button onClick={handleDelete} >Delete</button>
    </div>
  );
}