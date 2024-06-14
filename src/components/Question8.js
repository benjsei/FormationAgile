import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION8 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response8');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/QUESTION8.jpg" alt="Question 8" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION8_CHOIX1.png"
        alt="Choix A"
        top="5%"
        left="36%"
        width="27%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION8_CHOIX2.png"
        alt="Choix B"
        top="4%"
        left="65%"
        width="32%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION8;
