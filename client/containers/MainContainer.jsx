import React, { useEffect } from 'react';
import VocabButtons from '../components/VocabButtons';
import VocabSubmit from '../components/VocabSubmit';

const MainContainer = () => {
  return (
    <div className="main-container">
      <form className="lesson-review">
        <h1>Vista Higher Learning</h1>
        <VocabButtons />
        <label className='screen-reader' htmlFor='freeform-response'>
          Write your answer based on the reading material:
        </label>
        <textarea id='freeform-response' name='freeform-response'>
          Write your answer based on the reading material
        </textarea>
        {/* <VocabText /> */}
        <VocabSubmit />
      </form>
    </div>
  );
};

export default MainContainer;