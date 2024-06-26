import React from 'react';
import NextButton from './NextButton';

const Title = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src="/images/TITRE.jpg" alt="Title" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/objective" />
    </div>
  );
};

export default Title;
