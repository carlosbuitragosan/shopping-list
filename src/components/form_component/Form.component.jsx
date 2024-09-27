import React, { useState } from 'react';
import generateId from '../Utils/generate_id';
import './Form.css';

export default function Form({ addListItem }) {
  const [text, setText] = useState('');

  const handleChange = ({ target }) => setText(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const listObject = {
        id: generateId(),
        text,
      };
      addListItem(listObject);
      setText('');
    }
  };

  return (
    <form name="form" className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add an item"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="input-button">
        <span className="material-symbols-outlined">add</span>
      </button>
    </form>
  );
}
