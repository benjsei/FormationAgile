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
import Question5 from './components/Question5';
import Response5 from './components/Response5';
import Question6 from './components/Question6';
import Response6 from './components/Response6';
import Question7 from './components/Question7';
import Response7 from './components/Response7';
import Question8 from './components/Question8';
import Response8 from './components/Response8';
import Question9 from './components/Question9';
import Response9 from './components/Response9';
import Score from './components/Score';

const App = () => {
  const [score, setScore] = useState(0);

  const resetScore = () => setScore(0);

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
        <Route path="/question5" element={<Question5 setScore={setScore} />} />
        <Route path="/response5" element={<Response5 />} />
        <Route path="/question6" element={<Question6 setScore={setScore} />} />
        <Route path="/response6" element={<Response6 />} />
        <Route path="/question7" element={<Question7 setScore={setScore} />} />
        <Route path="/response7" element={<Response7 />} />
        <Route path="/question8" element={<Question8 setScore={setScore} />} />
        <Route path="/response8" element={<Response8 />} />
        <Route path="/question9" element={<Question9 setScore={setScore} />} />
        <Route path="/response9" element={<Response9 />} />
        <Route path="/score" element={<Score score={score} resetScore={resetScore} />} />
      </Routes>
    </Router>
  );
};

export default App;
