import React, { useState } from 'react';

export default function Form() {
  const [text, setText] = useState('');

  const handleChange = ({ target }) => setText(target.value);
  
  return (
    <form>
      <input type="text" value={text} onChange={handleChange} />
    </form>
  );
}
