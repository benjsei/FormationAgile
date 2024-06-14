import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const RestartButton = ({ resetScore }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  
  const handleKeyPress = useCallback((e) => {
    if (e.key === ' ' || e.key === 'ArrowRight') {
      resetAndNavigate();
    }
  }, [navigate, resetScore]);

  const resetAndNavigate = () => {
    resetScore();
    navigate('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
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
        bottom: '5%',
        right: '5%',
        cursor: 'pointer',
        display: visible ? 'block' : 'none',
        transition: 'transform 0.3s ease'
      }}
      onClick={resetAndNavigate}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1.0)';
      }}
    >
      <img src="/images/RECOMMENCER.png" alt="Recommencer" style={{ width: '20vw' }} />
    </div>
  );
};

export default RestartButton;
