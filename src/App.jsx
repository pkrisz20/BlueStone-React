import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  // HERE IS THE ERROR
  const location = useLocation();
  const [isNotFound, setIsNotFound] = useState(false);



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about/:username" element={<AboutPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
