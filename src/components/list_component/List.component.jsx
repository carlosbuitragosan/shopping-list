import React from 'react';
import './List.css';

export default function List({ listItem, removeListItem }) {
  const formattedText = listItem.text[0].toUpperCase() + listItem.text.slice(1);

  return (
    <li className="list-item">
      <p className="text">{formattedText}</p>
      <button
        type="button"
        className="remove-button"
        onClick={() => removeListItem(listItem.id)}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </li>
  );
}
