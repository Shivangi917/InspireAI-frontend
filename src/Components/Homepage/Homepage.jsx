import React, { useState } from 'react';

function Homepage() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='min-h-screen bg-slate-200 flex items-center justify-center'>
      <input 
        type='text'
        value={inputText}
        onChange={handleInputChange}
        placeholder="Let's Cook Something"
        className='p-2 text-xl rounded-md border border-slate-400 w-[80%] max-w-lg shadow-lg'
      />
    </div>
  );
}

export default Homepage;
