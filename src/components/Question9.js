import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION9 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response9');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/QUESTION9.jpg" alt="Question 9" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION9_CHOIX1.png"
        alt="Choix A"
        top="1%"
        left="39%"
        width="29%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION9_CHOIX2.png"
        alt="Choix B"
        top="2%"
        left="70%"
        width="28%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION9;
