import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import FactsPage from './pages/Facts';
import NotFoundPage from './pages/NotFound';
import Navbar from './components/Navbar';
// import Button from './components/Button';

function App() {
  // HERE IS THE ERROR
  // const location = useLocation();
  // const [isNotFound, setIsNotFound] = useState(false);

  // function handle() {
  //   console.log('clicked');
  // }

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Button color="green" onClick={handle} text="Click me" /> */}
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/facts" element={<FactsPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
