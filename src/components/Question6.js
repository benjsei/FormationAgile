import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION6 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'A' ? 1 : 0)); 
    navigate('/response6');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/QUESTION6.jpg" alt="Question 6" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION6_CHOIX1.png"
        alt="Choix A"
        top="8%"
        left="36%"
        width="29%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION6_CHOIX2.png"
        alt="Choix B"
        top="4%"
        left="70%"
        width="29%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION6;
