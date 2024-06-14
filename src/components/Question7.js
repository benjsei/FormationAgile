import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION7 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response7');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/QUESTION7.jpg" alt="Question 7" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION7_CHOIX1.png"
        alt="Choix A"
        top="8%"
        left="36%"
        width="26%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION7_CHOIX2.png"
        alt="Choix B"
        top="8%"
        left="65%"
        width="30%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION7;
