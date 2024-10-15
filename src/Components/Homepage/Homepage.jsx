import React, { useState } from 'react';
import axios from 'axios';

function Homepage() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/query', { query: inputText });
      setInputText('');
    } catch (error) {
      console.error("Error posting query: ", error);
    }
  };

  return (
    <div className='min-h-screen bg-slate-200 flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          value={inputText}
          onChange={handleInputChange}
          placeholder="Let's Cook Something"
          className='p-2 text-xl rounded-md border border-slate-400 w-[700px] shadow-lg' 
        />
      </form>
    </div>
  );
}

export default Homepage;
