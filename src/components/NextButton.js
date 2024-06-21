import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const NextButton = ({ to, imgSrc }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  
  const handleKeyPress = useCallback((e) => {
    if (e.key === ' ' || e.key === 'ArrowRight') {
      navigate(to);
    }
  }, [navigate, to]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div 
      style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        cursor: 'pointer',
        display: visible ? 'block' : 'none',
        transition: 'transform 0.3s ease'
      }}
      onClick={() => navigate(to)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1.0)';
      }}
    >
      <img src={imgSrc || "/images/BOUTONSUIVANT.png"} alt="Suivant" style={{ width: '20vw' }} />
    </div>
  );
};

export default NextButton;
