import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/form_component/Form.component';
import List from './components/list_component/List.component';

function App() {
  const [list, setList] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem('shoppingList'));
    return savedList || [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(list));
  });
  const addListItem = (item) => {
    setList((prev) => [item, ...prev]);
  };

  const removeListItem = (itemId) => {
    setList((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1 className="main-title">SHOPPING LIST</h1>
      <main>
        <Form addListItem={addListItem} />
        <ul className="list">
          {list.map((listItem) => (
            <List
              key={listItem.id}
              listItem={listItem}
              removeListItem={removeListItem}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
