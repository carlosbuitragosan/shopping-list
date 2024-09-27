import React from 'react';
import './List.css';

export default function List({ listItem, removeListItem }) {
  return (
    <li className="list-item">
      <p className="text">{listItem.text}</p>
      <button
        type="button"
        className="remove-button"
        onClick={() => removeListItem(listItem.id)}
      >
        X
      </button>
    </li>
  );
}
