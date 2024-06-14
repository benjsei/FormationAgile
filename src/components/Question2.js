import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const Question2 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'A' ? 1 : 0)); 
    navigate('/response2');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'black' }}>
      <img src="/images/QUESTION2.jpg" alt="Question 2" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION2_CHOIX2.png"
        alt="Choix B"
        top="20%"
        left="22%"
        width="78%"
        onClick={() => handleChoice('B')}
      />
      <ChoiceImage
        src="/images/QUESTION2_CHOIX1.png"
        alt="Choix A"
        top="5%"
        left="22%"
        width="45%"
        onClick={() => handleChoice('A')}
      />
    </div>
  );
};

export default Question2;
