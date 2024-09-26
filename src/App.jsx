import './App.css';
import React, { useState } from 'react';
import Form from './components/form_component/Form.component';
import List from './components/list_component/List.component';

function App() {
  const [list, setList] = useState([]);
  console.log({ list });

  const addListItem = (item) => {
    setList((prev) => [item, ...prev]);
  };

  const removeListItem = (itemId) => {
    setList((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
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
