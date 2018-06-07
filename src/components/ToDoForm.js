import React from 'react';

const ToDoForm = (props) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.addTodo(input.value);
      input.value = '';
    }}>
      <input className="form-control col-md-12" ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

export default ToDoForm;