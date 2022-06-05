import React from 'react';
import MediaButton from './MediaButton';

const VocabButtons = () => {
  return (
    <fieldset className='buttons vocab-buttons'>
      <legend>Say the vocabulary words.</legend>
      <MediaButton type='Stop' />
      <MediaButton type='Record' />
      <MediaButton type='Review your recording' />
    </fieldset>
  );
};

export default VocabButtons;