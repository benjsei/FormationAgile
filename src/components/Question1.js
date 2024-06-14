import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const Question1 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'B' ? 1 : 0)); 
    navigate('/response1');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/QUESTION1.jpg" alt="Question 1" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION1_CHOIX1.png"
        alt="Choix A"
        top="15%"
        left="33%"
        width="33%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION1_CHOIX2.png"
        alt="Choix B"
        top="1%"
        left="68%"
        width="30%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default Question1;
