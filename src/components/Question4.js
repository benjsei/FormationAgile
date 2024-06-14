import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION4 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response4');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/QUESTION4.jpg" alt="Question 4" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION4_CHOIX1.png"
        alt="Choix A"
        top="5%"
        left="35%"
        width="34%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION4_CHOIX2.png"
        alt="Choix B"
        top="0%"
        left="65%"
        width="35%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION4;
