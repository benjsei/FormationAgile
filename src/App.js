import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './components/Title';
import Objective from './components/Objective';
import Question1 from './components/Question1';
import Response1 from './components/Response1';
import Question2 from './components/Question2';
import Response2 from './components/Response2';
import Question3 from './components/Question3';
import Response3 from './components/Response3';
import Question4 from './components/Question4';
import Response4 from './components/Response4';
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
        <Route path="/question3" element={<Question3 setScore={setScore} />} />
        <Route path="/response3" element={<Response3 />} />
        <Route path="/question4" element={<Question4 setScore={setScore} />} />
        <Route path="/response4" element={<Response4 />} />
        <Route path="/score" element={<Score score={score} />} />
      </Routes>
    </Router>
  );
};

export default App;
