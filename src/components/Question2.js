import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceImage from './ChoiceImage';

const Question2 = ({ setScore }) => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    setScore(prevScore => prevScore + (choice === 'A' ? 7 : 0)); // Ajustez le calcul du score selon les besoins
    navigate('/response2');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundColor: 'black' }}>
      <img src="/images/QUESTION2.png" alt="Question 2" style={{ width: '100%', height: '100%' }} />
      <ChoiceImage
        src="/images/QUESTION2_CHOIX2.png"
        alt="Choix B"
        top="20%"
        left="20%"
        width="80%"
        height="50%"
        onClick={() => handleChoice('B')}
      />
      <ChoiceImage
        src="/images/QUESTION2_CHOIX1.png"
        alt="Choix A"
        top="7%"
        left="21%"
        width="46%"
        height="60%"
        onClick={() => handleChoice('A')}
      />
    </div>
  );
};

export default Question2;
