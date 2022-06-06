import React, { useState } from 'react';

const buttonTypes = {
  'Stop': 'square',
  'Record': 'circle',
  'Review your recording': 'triangle-right'
};

const MediaButton = ({ mediaFunc, active, handleClick }) => {
  
  
  return (
    <div className='media-control'>
      <button type='button'
        className={`button media-button ${mediaFunc === active ? 'active' : ''}`}
        aria-label={mediaFunc} onClick={() => handleClick(mediaFunc)}>
        <div className={buttonTypes[mediaFunc]} />
      </button>
      {mediaFunc}
    </div>
  );
};

export default MediaButton;