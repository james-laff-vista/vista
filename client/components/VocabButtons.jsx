import React, { useState } from 'react';
import MediaButton from './MediaButton';

const VocabButtons = ({ response }) => {
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState('Stop');

  function handleClick(mediaFunc) {
    setActive(mediaFunc);

    if (mediaFunc === 'Stop' && playing === true) response.current.focus();
    if (mediaFunc === 'Review your recording') {
      setPlaying(true);
      setTimeout(() => {
        setPlaying(false);
        setActive('Stop');
      }, 5000);
    }
  }
  
  return (
    <fieldset className='buttons vocab-buttons'>
      <legend>Say the vocabulary words.</legend>
      <MediaButton mediaFunc='Stop' handleClick={handleClick} />
      <MediaButton mediaFunc='Record' active={active} handleClick={handleClick} />
      <MediaButton mediaFunc='Review your recording' active={active} handleClick={handleClick} />
    </fieldset>
  );
};

export default VocabButtons;