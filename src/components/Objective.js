import React from 'react';
import NextButton from './NextButton';

const Objective = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/OBJECTIF.png" alt="Objective" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/question1" />
    </div>
  );
};

export default Objective;
