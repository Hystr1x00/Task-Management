import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('');
    const [assignee, setAssignee] = useState('');
    const [deadline, setDeadline] = useState('');


    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (task && assignee && deadline) {
            // Add todo with all values
            addTodo({ task, assignee, deadline });
            // Clear form after submission
            setTask('');
            setAssignee('');
            setDeadline('');
        };
    };
      
      
      
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <div className="inputwrapper">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="todo-input" placeholder='Ada tugas apa hari ini?' />
      <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} className="assign-input" placeholder='siapa yang harus ngerjain?' />
      <input type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="deadline-input" placeholder='kapan tugas harus dikerjain?' />
      <button type="submit" className='todo-btn'>ADD</button>
    </div>
  </form>
  )

}