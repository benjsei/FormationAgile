import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './components/Title';
import Objective from './components/Objective';
import Question1 from './components/Question1';
import Response1 from './components/Response1';
import Question2 from './components/Question2';
import Response2 from './components/Response2';
import Score from './components/Score';

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/question1" element={<Question1 setScore={setScore} />} />
        <Route path="/response1" element={<Response1 />} />
        <Route path="/question2" element={<Question2 setScore={setScore} />} />
        <Route path="/response2" element={<Response2 />} />
        <Route path="/score" element={<Score score={score} />} />
      </Routes>
    </Router>
  );
};

export default App;