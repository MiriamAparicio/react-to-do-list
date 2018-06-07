import React from 'react';

const Title = (props) => {
  return (
    <div>
      <div>
        <h1>To-Do ({props.todoCount})</h1>
      </div>
    </div>
  );
}

export default Title;