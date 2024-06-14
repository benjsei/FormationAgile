import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from './NextButton';

const Response3 = () => {
  const navigate = useNavigate();

  const handleKeyPress = useCallback((e) => {
    if (e.key === ' ' || e.key === 'ArrowRight') {
      navigate('/score');
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
      <img src="images/REPONSE3.jpg" alt="Réponse 3" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/question4" />
    </div>
  );
};

export default Response3;
