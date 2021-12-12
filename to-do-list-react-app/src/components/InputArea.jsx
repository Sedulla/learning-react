import React, { useState } from 'react';

function InputArea(props) {
  const [list, setList] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    setList(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={list} />
      <button
        onClick={() => {
          props.onAdd(list);
          setList('');
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
