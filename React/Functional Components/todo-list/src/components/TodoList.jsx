import React, { useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const addTask = e => {
    e.preventDefault();
    input !== '' && setList([...list, { content: input, isChecked: false }]);
    setInput('');
  };

  const removeTask = index => {
    setList(list.filter((task, i) => i !== index));
  };

  const toggleChecked = index => {
    const task = { ...list[index] };

    task.isChecked = !task.isChecked;
    setList([...list.slice(0, index), task, ...list.slice(index + 1)]);
  };

  return (
    <>
      <h2 className="text-center mb-5">Todo List</h2>
      <form onSubmit={addTask} className="mb-5">
        <div class="form-group">
          <input onChange={e => setInput(e.target.value)} value={input} className="form-control" />
          <button type="submit" className="btn btn-outline-dark mt-4 px-4 py-2">
            Add Task
          </button>
        </div>
      </form>
      {list.map((task, index) => (
        <div key={index} className="bg-light border rounded d-flex align-items-center mb-2 p-2">
          <span style={{ textDecoration: task.isChecked && 'line-through' }} className="mr-auto">
            {task.content}
          </span>
          <input
            type="checkbox"
            checked={task.isChecked}
            onClick={() => toggleChecked(index)}
            className="mr-4"
            readOnly
          />
          <button onClick={() => removeTask(index)} className="btn btn-outline-danger px-4 py-1">
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
