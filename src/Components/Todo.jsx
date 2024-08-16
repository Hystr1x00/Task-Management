import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <div className="todo-details" onClick={() => toggleComplete(task.id)}>
        <p className={`${task.completed ? "completed" : "incompleted"}`}>
          <h4>Task to do : {task.task}</h4>
          <h4>Assign to : {task.assignee}</h4>  
          <h4>Deadline : {task.deadline}</h4> 
        </p>
      </div>
      <div className="todo-actions">
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
