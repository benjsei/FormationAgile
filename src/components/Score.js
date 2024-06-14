import React from 'react';
import RestartButton from './RestartButton';

const Score = ({ score, resetScore }) => {
  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/SCORE.jpg" alt="Score" style={{ width: '100%', height: '100%' }} />
      <div 
        style={{
          position: 'absolute',
          top: '31%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontSize: '3vw',
          fontFamily: 'Comic Sans MS, cursive, sans-serif',
          textAlign: 'center'
        }}
      >
        Votre SCORE est de {score}/9
      </div>
      <RestartButton resetScore={resetScore} />
    </div>
  );
};

export default Score;
