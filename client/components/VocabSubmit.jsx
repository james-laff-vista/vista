import React from 'react';

const VocabSubmit = () => {
  return (
    <div className='buttons submit-buttons'>
      <label htmlFor='final-answer'>Is this your final answer?</label>
      <div className='answer-buttons'>
        <input type='radio' id='true' name='final-answer' value='true' />
        <label htmlFor='true'>True</label>
        <input type='radio' id='false' name='final-answer' value='false' />
        <label htmlFor='false'>False</label>
      </div>
      <input type='submit' value='Submit' />
    </div>
  );
};

export default VocabSubmit;