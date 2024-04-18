import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => setTodos(prev => {
    const newTodo = {
      id: prev.length ? prev.at(-1).id + 1 : 1,
      title,
      complete: false,
    };

    return [...prev, newTodo];
  })

  const toggleTodo = (id) => setTodos(prev => prev.map(t => {
    if (t.id === id) {
      return {
        ...t,
        complete: !t.complete,
      }
    }

    return t;
  }))

  const deleteTodo = (id) => setTodos(prev => prev.filter(t => t.id !== id));

  return (
    <div className="App">
      <Form onAdd={addTodo} />
      <TodoList 
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
