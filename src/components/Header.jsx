import { useMemo, useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';
import "../styles/components/Header.scss";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenMobileDropdown, setIsOpenMobileDropdown] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const mobileNavRef = useRef();
    const mobileNavOpenerRef = useRef();

    function handleScroll () {
        setScrollPosition(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openDropdown = useMemo(() => {
        return isOpenDropdown
    }, [isOpenDropdown]);

    const openMobileDropdown = useMemo(() => {
        return isOpenMobileDropdown
    }, [isOpenMobileDropdown]);

    const openNavbar = useMemo(() => {
        return isOpenNav
    }, [isOpenNav]);

    useClickOutside(mobileNavRef, () => {
        if (isOpenNav) setIsOpenNav(false);
    }, mobileNavOpenerRef);

    return (
        <header className={`header ${scrollPosition > 0 ? 'sticky' : ''}`}>
            <div className="header-top">
                <div className="wrapper">
                    <div className="header-top-countries">
                        <a className="header-top-countries-link" aria-label="Link to India map" href="/">India</a>
                        <a className="header-top-countries-link" aria-label="Link to Europe map" href="/">Europe</a>
                        <a className="header-top-countries-link" aria-label="Link to USA map" href="/">USA</a>
                    </div>
                    <div className="header-top-contact">
                        <a className="header-top-contact-link" aria-label="Link to call phone" href="tel:+91 98253 53267"><i className="fas fa-phone"></i> +91 98253 53267</a>
                        <a className="header-top-contact-link" aria-label="Link to call phone" href="tel:+91 99251 77600"><i className="fas fa-phone"></i> +91 99251 77600</a>
                        <a className="header-top-contact-link" aria-label="Link to send an email" href="mail:info@bluestoneworldwide.com"><i className="fas fa-envelope"></i> info@bluestoneworldwide.com</a>
                        <div className="socials">
                            <a className="socials-link" aria-label="Link to social media platform" href="https://twitter.com/" target="blank"><i className="fab fa-twitter"></i></a>
                            <a className="socials-link" aria-label="Link to social media platform" href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook-f"></i></a>
                            <a className="socials-link" aria-label="Link to social media platform" href="https://www.youtube.com/" target="blank"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="wrapper">
                    <a className="header-bottom-logo" aria-label="Link to main page via logo image" href='/'>
                        <picture>
                            <source srcSet={require('../assets/logo-bluestone.webp')} type="image/webp" />
                            <img loading="lazy" src={require('../assets/logo-bluestone.png')} alt="logo-bluestone" />
                        </picture>
                    </a>
                    <nav className="header-nav">
                        <ul className='header-nav-list'>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/">Home</NavLink></li>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/company">Company</NavLink></li>
                            <li className={`header-nav-list-item dropdown-item ${openDropdown ? 'open' : ''}`} onMouseOver={() => setIsOpenDropdown(true)} onMouseOut={() => setIsOpenDropdown(false)}>
                                <a className='header-nav-list-item-link dropdown-link' aria-label="Link to open the dropdown menu">Services <i className="fas fa-angle-down"></i></a>

                                <ul className={`dropdown-menu ${openDropdown ? 'is-open' : ''}`}>
                                    <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For Android</NavLink></li>
                                    <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For IOS</NavLink></li>
                                    <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For Windows</NavLink></li>
                                    <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For Linux</NavLink></li>
                                </ul>
                            </li>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/exhibitions">Exhibitions</NavLink></li>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/ourwork">Our Work</NavLink></li>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/blogs">Blogs</NavLink></li>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/resource">Resource</NavLink></li>
                            <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/contact">Contact</NavLink></li>
                            <li className="header-nav-list-item"><button className='header-nav-list-item-button'>Get a Quote</button></li>
                        </ul>
                    </nav>
                    <div className="header-bottom-toggle" onClick={ () => setIsOpenNav(true) } ref={mobileNavOpenerRef}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>

            {/* MOBILE NAV */}
            <div className={`header-mobile ${openNavbar ? 'open-mobile-nav' : ''}`} ref={mobileNavRef}>
                <div className="header-mobile-top">
                    <div className="mobile-nav-closer" onClick={ () => setIsOpenNav(false) }>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="header-mobile-top-countries">
                        <a className="header-mobile-top-countries-link" aria-label="Link to India map" href="/">India</a>
                        <a className="header-mobile-top-countries-link" aria-label="Link to Europe map" href="/">Europe</a>
                        <a className="header-mobile-top-countries-link" aria-label="Link to USA map" href="/">USA</a>
                    </div>
                    <div className="socials">
                        <a className="socials-link" aria-label="Link to social media platform" href="https://twitter.com/" target="blank"><i className="fab fa-twitter"></i></a>
                        <a className="socials-link" aria-label="Link to social media platform" href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="socials-link" aria-label="Link to social media platform" href="https://www.youtube.com/" target="blank"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <nav className="header-nav">
                    <ul className='header-nav-list'>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/">Home</NavLink></li>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/company">Company</NavLink></li>
                        <li className={`header-nav-list-item dropdown-item ${openMobileDropdown ? 'open' : ''}`} onClick={ () => setIsOpenMobileDropdown( !isOpenMobileDropdown ) }>
                            <a className='header-nav-list-item-link dropdown-link' aria-label="Link to open the dropdown menu">Services <i className="fas fa-angle-down"></i></a>

                            <ul className={`dropdown-menu ${openMobileDropdown ? 'is-open' : ''}`}>
                                <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For Android</NavLink></li>
                                <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For IOS</NavLink></li>
                                <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For Windows</NavLink></li>
                                <li className='dropdown-menu-item'><NavLink aria-label="Navigation link inside the page" className='dropdown-menu-item-link' to="/">For Linux</NavLink></li>
                            </ul>
                        </li>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/exhibitions">Exhibitions</NavLink></li>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/ourwork">Our Work</NavLink></li>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/blogs">Blogs</NavLink></li>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/resource">Resource</NavLink></li>
                        <li className="header-nav-list-item"><NavLink aria-label="Navigation link inside the page" className={({ isActive }) => (isActive ? "header-nav-list-item-link active" : "header-nav-list-item-link")} to="/contact">Contact</NavLink></li>
                        <li className="header-nav-list-item"><button className='header-nav-list-item-button'>Get a Quote</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
