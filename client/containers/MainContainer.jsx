import React, { useRef } from 'react';
import VocabButtons from '../components/VocabButtons';
import VocabSubmit from '../components/VocabSubmit';

const MainContainer = () => {
  const response = useRef(null);
  
  return (
    <form className="lesson-review">
      <VocabButtons response={response} />
      <label className='screen-reader' htmlFor='freeform-response'>
          Write your answer based on the reading material:
      </label>
      <textarea id='freeform-response' name='freeform-response' rows='5'
        ref={response} placeholder='Write your answer based on the reading material.' />
      <VocabSubmit />
    </form>
  );
};

export default MainContainer;