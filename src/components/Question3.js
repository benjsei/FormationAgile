import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const QUESTION3 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'A' ? 7 : 0)); // Ajustez le calcul du score selon les besoins
    navigate('/response3');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/QUESTION3.png" alt="Question 3" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION3_CHOIX1.png"
        alt="Choix A"
        top="8%"
        left="29%"
        width="35%"
        height="55%"
        onClick={() => handleChoice('A')}
      />
      <ChoiceImage
        src="/images/QUESTION3_CHOIX2.png"
        alt="Choix B"
        top="15%"
        left="65%"
        width="32%"
        height="50%"
        onClick={() => handleChoice('B')}
      />
    </div>
  );
};

export default QUESTION3;
