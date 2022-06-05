import React from 'react';

const buttonTypes = {
  'Stop': 'square',
  'Record': 'circle',
  'Review your recording': 'triangle-right'
};

const MediaButton = ({ type }) => {
  return (
    <div className='media-control'>
      <button className='button media-button' aria-label={type}>
        <div className={buttonTypes[type]} />
      </button>
      {type}
    </div>
  );
};

export default MediaButton;