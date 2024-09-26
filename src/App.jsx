import './App.css';
import React, { useState } from 'react';
import Form from './components/form_component/Form.component';
import List from './components/list_component/List.component';

function App() {
  const [list, setList] = useState([]);

  const addListItem = (item) => setList((prev) => [item, ...prev]);

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Form />
      <List addListItem={addListItem} />
    </div>
  );
}

export default App;
