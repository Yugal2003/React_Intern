import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import downChevron from '../../img/down-chevron_3.png';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      setTodos([...todos, { text: event.target.value.trim(), completed: false }]);
      event.target.value = '';
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodos);
  };

  const startEdit = (index, newText) => {
    const updatedTodos = todos.map((todo, i) => i === index ? { ...todo, text: newText } : todo);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const toggleAllTodosCompletion = () => {
    const allCompleted = todos.every(todo => todo.completed);
    const updatedTodos = todos.map(todo => ({ ...todo, completed: !allCompleted }));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1 id="h1tag">todos</h1>
      <div id="div_3" style={{ marginTop: '-3.5rem' }}>
        <div style={{ paddingBlock: '0.6rem', display: 'flex', gap: '1rem', borderBottom: '2px solid rgb(223, 223, 223)', boxShadow: '1px 0.3px -1px 1px rgb(242, 242, 242)' }}>
          <img width="40px" src={downChevron} alt="" onDoubleClick={toggleAllTodosCompletion} />
          <input onKeyDown={addTodo} type="text" id="todo-input" placeholder="What needs to be done?" />
        </div>
        <ul id="todo-list">
          {filteredTodos.length === 0 ? (
            <li className="no-data-available">No Todos Data are Available !!!</li>
          ) : (
            filteredTodos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                toggleComplete={toggleComplete}
                startEdit={startEdit}
              />
            ))
          )}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginInline: '0.7rem', marginTop: '-0.5rem' }}>
          <div id="total-count">{todos.length} item{todos.length !== 1 ? 's' : ''} left</div>
          <div>
            <button className="btnss" onClick={() => setFilter('all')}>All</button>
            <button className="btnss" onClick={() => setFilter('active')}>Active</button>
            <button className="btnss" onClick={() => setFilter('completed')}>Completed</button>
          </div>
          <button className="btnss" onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
