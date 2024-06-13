import React, { useState, useEffect } from 'react';

const ChoiceImage = ({ src, alt, top, left, width, height, onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const choiceStyle = {
    position: 'absolute',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    top: top,
    left: left,
    width: width,
    height: height,
    display: visible ? 'block' : 'none'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1.0)';
  };

  return (
    <img
      src={src}
      alt={alt}
      style={choiceStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default ChoiceImage;
