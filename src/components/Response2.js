import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from './NextButton';

const Response2 = () => {
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
    <div style={{ position: 'relative', height: '100vh' }}>
      <img src="images/REPONSE2.png" alt="Réponse 2" style={{ width: '100%', height: '100%' }} />
      <NextButton to="/question3" />
    </div>
  );
};

export default Response2;
