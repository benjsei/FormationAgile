import React from 'react';

const Score = ({ score }) => {
  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/SCORE.png" alt="Score" style={{ width: '100%', height: '100%' }} />
      <div 
        style={{
          position: 'absolute',
          top: '31%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontSize: '3em',
          fontFamily: 'Comic Sans MS, cursive, sans-serif',
          textAlign: 'center'
        }}
      >
        Votre SCORE est de {score}/20
      </div>
    </div>
  );
};

export default Score;
