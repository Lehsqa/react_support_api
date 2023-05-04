import React, { useState } from 'react';
import axios from 'axios';
import Paragraph from './components/Paragraph';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/question', JSON.stringify({ "question": inputValue.toString() }), {headers: { 'Content-Type': 'application/json', }});
      setResponseText(response.data.Answer_original);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='App'>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Answer</button>
      </div>
      <div className='paragraph'>
        <Paragraph response={responseText}/>
      </div>
    </div>
  );
}

export default App;
