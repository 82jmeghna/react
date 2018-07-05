import React from 'react';

import spinner from './Eclipse-Loaderpx.gif';
import './SpinnerLoader.css';

const SpinnerLoader = () => {
  return(
    <div className='spinner-container'>
      <img className='spinner' alt={'loading...'} src={spinner} />
    </div>
  )
};

export default SpinnerLoader;
