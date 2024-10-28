import React, { useState } from 'react';
import trueImage from '../../img/true_2.png';

const TodoItem = ({ todo, index, toggleComplete, startEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (event) => {
    setNewText(event.target.value);
  };

  const handleEditKeydown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      startEdit(index, newText);
    } else if (event.key === 'Escape') {
      setIsEditing(false);
      setNewText(todo.text);
    }
  };

  return (
    <li className="todo-item">
      <div className='parent_div'>
        {!todo.completed ? (
          <div className="circle" onClick={() => toggleComplete(index)}></div>
        ) : (
          <div className="image-container" onClick={() => toggleComplete(index)}>
            <img className="img1" src={trueImage} alt="Completed" />
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={newText}
            onChange={handleEditChange}
            onBlur={() => setIsEditing(false)}
            onKeyDown={handleEditKeydown}
          />
        ) : (
          <span className={todo.completed ? 'completed' : 'uncompleted'} onDoubleClick={handleEdit}>
            {todo.text}
          </span>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
