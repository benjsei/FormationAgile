import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION5 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response5');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/QUESTION5.jpg" alt="Question 5" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION5_CHOIX1.png"
        alt="Choix A"
        top="8%"
        left="36%"
        width="28%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION5_CHOIX2.png"
        alt="Choix B"
        top="8%"
        left="63%"
        width="32%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION5;
