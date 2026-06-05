import React from 'react';
import { useState } from 'react';

const App = () => {
  const [text,setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange}/>
      <p>Entered text : {text}</p>
    </div>
  )
}

export default App
