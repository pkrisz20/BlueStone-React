import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import FactsPage from './pages/Facts';
import NotFoundPage from './pages/NotFound';
import ImagesPage from './pages/Images';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import useToggle from "./hooks/useToggle";
import useClickOutside from "./hooks/useClickOutside";
import { useRef } from 'react';

function App() {
  const [isOpenCart, toggleIsOpenCart] = useToggle(false);
  const cartRef = useRef();
  const cartButtonRef = useRef();

  useClickOutside(cartRef, (e) => {
    // close the cart by clicking outside of it
    if (!(cartButtonRef.current.contains(e.target)) && isOpenCart) toggleIsOpenCart(false);
  });

  return (
    <div className="App">
      <Router>
        <Navbar cartButtonRef={cartButtonRef} openCart={() => toggleIsOpenCart()} />
        <Cart cartRef={cartRef} isOpen={isOpenCart} closeCart={() => toggleIsOpenCart()} />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/facts" element={<FactsPage />}/>
          <Route path="/images" element={<ImagesPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;