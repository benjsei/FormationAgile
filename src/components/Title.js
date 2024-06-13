import React from 'react';
import NextButton from './NextButton';

const Title = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img src="/images/TITRE.png" alt="Title" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/objective" />
    </div>
  );
};

export default Title;
