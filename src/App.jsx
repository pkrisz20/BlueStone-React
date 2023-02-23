import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home';
import CompanyPage from './pages/Company';
import ExhibitionsPage from './pages/Exhibitions';
import OurWorkPage from './pages/OurWork';
import BlogsPage from './pages/Blogs';
import ResourcePage from './pages/Resource';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';
// import { setTranslations, setDefaultLanguage } from 'react-multi-lang';
// import hu from './lang/hu.json';
// import en from './lang/en.json';
// import sr from './lang/sr.json';

// setTranslations({ hu, en, sr });
// setDefaultLanguage('en');

function App() {
  // const lang = useParams();

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/company" element={<CompanyPage />}/>
            <Route path="/exhibtions" element={<ExhibitionsPage />}/>
            <Route path="/ourwork" element={<OurWorkPage />}/>
            <Route path="/blogs" element={<BlogsPage />}/>
            <Route path="/resource" element={<ResourcePage />}/>
            <Route path="/contact" element={<ContactPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
