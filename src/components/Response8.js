import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from './NextButton';

const Response8 = () => {
  const navigate = useNavigate();

  const handleKeyPress = useCallback((e) => {
    if (e.key === ' ' || e.key === 'ArrowRight') {
      navigate('/question9');
    }
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div style={{ position: 'relative' }}>
      <img src="images/REPONSE8.jpg" alt="Réponse 8" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/question9" />
    </div>
  );
};

export default Response8;
