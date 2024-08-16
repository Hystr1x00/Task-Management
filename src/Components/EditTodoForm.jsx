import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [updatedTask, setUpdatedTask] = useState(task.task); 
  const [updatedAssignee, setUpdatedAssignee] = useState(task.assignee);
  const [updatedDeadline, setUpdatedDeadline] = useState(task.deadline);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({
      task: updatedTask,
      assignee: updatedAssignee,
      deadline: updatedDeadline,
    }, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <input
        type="text"
        value={updatedAssignee}
        onChange={(e) => setUpdatedAssignee(e.target.value)}
        className="assign-input"
        placeholder="Update siapa"
      />
      <input
        type="text"
        value={updatedDeadline}
        onChange={(e) => setUpdatedDeadline(e.target.value)}
        className="deadline-input"
        placeholder="Update Deadline"
      />
      <button type="submit" className="todo-btn">Perbaharui</button>
    </form>
  );
};
