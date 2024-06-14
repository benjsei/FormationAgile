import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION3 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response3');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/QUESTION3.jpg" alt="Question 3" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION3_CHOIX1.png"
        alt="Choix A"
        top="6%"
        left="31%"
        width="35%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION3_CHOIX2.png"
        alt="Choix B"
        top="1%"
        left="68%"
        width="30%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION3;
