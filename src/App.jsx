import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './pages/Home';
import FactsPage from './pages/Facts';
import NotFoundPage from './pages/NotFound';
import ImagesPage from './pages/Images';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import useToggle from "./hooks/useToggle";
import useClickOutside from "./hooks/useClickOutside";
import { useRef, useState } from 'react';
import { setTranslations, setDefaultLanguage, useTranslation, setLanguage } from 'react-multi-lang';
import hu from './lang/hu.json';
import en from './lang/en.json';
import sr from './lang/sr.json';
import { useMemo } from 'react';

setTranslations({ hu, en, sr });
setDefaultLanguage('en');

function App() {
  // const lang = useParams();
  const [isOpenCart, toggleIsOpenCart] = useToggle(false);
  const cartRef = useRef();
  const cartButtonRef = useRef();

  useClickOutside(cartRef, (e) => {
    // close the cart by clicking outside of it
    if (!(cartButtonRef.current.contains(e.target)) && isOpenCart) toggleIsOpenCart(false);
  });

  const [selectedLang, setSelectedLang] = useState("EN");
  const [lang, setLang] = useState([
      {
          language: 'EN',
          selected: true,
      },
      {
          language: 'SR',
          selected: false,
      },
      {
          language: 'HU',
          selected: false,
      }
  ]);

  const changedLang = (selectedLng) => {
    lang.map(item => { item.selected = (item.language === selectedLng) ? true : false });
    setLang(lang);
    const activeLanguage = lang?.filter(item => item.selected ? true : false);
    setSelectedLang(activeLanguage[0].language);
    setLanguage(activeLanguage[0].language.toLocaleLowerCase());
  }

  const getActualLanguage = useMemo(() => {
    return selectedLang.toLowerCase() ?? 'en';
  }, [selectedLang]);

  return (
    <div className="App">
      <Router>
      <div>{getActualLanguage}</div>
        <Navbar cartButtonRef={cartButtonRef} openCart={() => toggleIsOpenCart()} changedLang={(selected) => changedLang(selected)} lang={lang} selectedLang={selectedLang} />
        <Cart cartRef={cartRef} isOpen={isOpenCart} closeCart={() => toggleIsOpenCart()} />
        <Routes>
            <Route path={`${getActualLanguage}`} element={<HomePage />}>
              <Route path={`${getActualLanguage}/facts`} element={<FactsPage />}/>
              <Route path={`${getActualLanguage}/images`} element={<ImagesPage />}/>
              <Route path={`${getActualLanguage}/contact`} element={<ContactPage />}/>
              <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;