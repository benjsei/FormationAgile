import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const Question1 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'A' ? 7 : 0)); // Ajustez le calcul du score selon les besoins
    navigate('/response1');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/QUESTION1.png" alt="Question 1" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION1_CHOIX1.png"
        alt="Choix A"
        top="20%"
        left="33%"
        width="33%"
        height="45%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION1_CHOIX2.png"
        alt="Choix B"
        top="2%"
        left="68%"
        width="31%"
        height="64%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default Question1;
