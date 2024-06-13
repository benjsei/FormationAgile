import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NextButton = ({ to }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  
  const handleKeyPress = (e) => {
    if (e.key === ' ' || e.key === 'ArrowRight') {
      navigate(to);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [to]);

  return (
    <div 
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        display: visible ? 'block' : 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onClick={() => navigate(to)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1.0)';
      }}
    >
      <img src="/images/BOUTONSUIVANT.png" alt="Question Suivante" style={{ width: '20vw' }} />
    </div>
  );
};

export default NextButton;
