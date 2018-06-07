import React from 'react';

const Todo = (props) => {
  // Each Todo
  return (<a href="#" className="list-group-item" onClick={() => { props.remove(props.todo.id) }}>{props.todo.text}</a>);
}

const ToDoList = (props) => {
  // Map through the todos
  const todoNode = props.todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={props.remove} />)
  });
  return (<div className="list-group">{todoNode}</div>);
}

export default ToDoList;