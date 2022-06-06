import React, {useState} from 'react';

const VocabSubmit = () => {
  const [noSubmit, setNoSubmit] = useState(true);
  
  return (
    <div className='buttons submit-buttons'>
      <label htmlFor='final-answer'>Is this your final answer?</label>
      <div className='answer-buttons'>
        <input type='radio' id='true' name='final-answer' 
          value='true' onChange={() => setNoSubmit(false)} />
        <label htmlFor='true'>True</label>
        <input type='radio' id='false' name='final-answer'
          value='false' onChange={() => setNoSubmit(true)} />
        <label htmlFor='false'>False</label>
      </div>
      <input type='submit' value='Submit' disabled={noSubmit} />
    </div>
  );
};

export default VocabSubmit;