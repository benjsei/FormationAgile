import React from 'react';
import NextButton from './NextButton';

const Objective = () => {
  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/OBJECTIF.jpg" alt="Objective" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/question1" imgSrc="/images/COMMENCER.png" />
    </div>
  );
};

export default Objective;
