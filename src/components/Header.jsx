import { useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';
import "../styles/components/Header.scss";

const Header = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const [isOpenMobileDropdown, setIsOpenMobileDropdown] = useState(false)
    const [isOpenNav, setIsOpenNav] = useState(false)
    const mobileNavRef = useRef()
    const mobileNavOpenerRef = useRef()

    const openDropdown = useMemo(() => {
        return isOpenDropdown
    }, [isOpenDropdown])

    const openMobileDropdown = useMemo(() => {
        return isOpenMobileDropdown
    }, [isOpenMobileDropdown])

    const openNavbar = useMemo(() => {
        return isOpenNav
    }, [isOpenNav])

    useClickOutside(mobileNavRef, () => {
        if ( isOpenNav ) setIsOpenNav( false );
    }, mobileNavOpenerRef)

    return (
        <header className='header'>
            <div className="header-top">
                <div className="wrapper">
                    <div className="header-top-countries">
                        <a className="header-top-countries-link" href="/">India</a>
                        <a className="header-top-countries-link" href="/">Europe</a>
                        <a className="header-top-countries-link" href="/">USA</a>
                    </div>
                    <div className="header-top-contact">
                        <a className="header-top-contact-link" href="tel:+91 98253 53267"><i className="fas fa-phone"></i> +91 98253 53267</a>
                        <a className="header-top-contact-link" href="tel:+91 99251 77600"><i className="fas fa-phone"></i> +91 99251 77600</a>
                        <a className="header-top-contact-link" href="mail:info@bluestoneworldwide.com"><i className="fas fa-envelope"></i> info@bluestoneworldwide.com</a>
                        <div className="socials">
                            <a className="socials-link" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a className="socials-link" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a className="socials-link" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="wrapper">
                    <a className="header-bottom-logo">
                        <picture>
                            <source srcSet={require('../assets/logo-bluestone.webp')} />
                            <img src={require('../assets/logo-bluestone.png')} alt="logo-bluestone" />
                        </picture>
                    </a>
                    <nav className="header-nav">
                        <ul className='header-nav-list'>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/home">Home</NavLink></li>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/company">Company</NavLink></li>
                            <li className={`header-nav-list-item dropdown-item ${openDropdown ? 'open' : ''}`} onMouseOver={() => setIsOpenDropdown(true)} onMouseOut={() => setIsOpenDropdown(false)}>
                                <a className='header-nav-list-item-link dropdown-link'>Services <i className="fas fa-angle-down"></i></a>

                                <ul className={`dropdown-menu ${openDropdown ? 'is-open' : ''}`}>
                                    <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For Android</NavLink></li>
                                    <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For IOS</NavLink></li>
                                    <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For Windows</NavLink></li>
                                    <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For Linux</NavLink></li>
                                </ul>
                            </li>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/exhibitions">Exhibitions</NavLink></li>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/ourwork">Our Work</NavLink></li>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/blogs">Blogs</NavLink></li>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/resource">Resource</NavLink></li>
                            <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/contact">Contact</NavLink></li>
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
                        <a className="header-mobile-top-countries-link" href="/">India</a>
                        <a className="header-mobile-top-countries-link" href="/">Europe</a>
                        <a className="header-mobile-top-countries-link" href="/">USA</a>
                    </div>
                    <div className="socials">
                        <a className="socials-link" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="socials-link" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="socials-link" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <nav className="header-nav">
                    <ul className='header-nav-list'>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/home">Home</NavLink></li>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/company">Company</NavLink></li>
                        <li className={`header-nav-list-item dropdown-item ${openMobileDropdown ? 'open' : ''}`} onClick={ () => setIsOpenMobileDropdown( !isOpenMobileDropdown ) }>
                            <a className='header-nav-list-item-link dropdown-link'>Services <i className="fas fa-angle-down"></i></a>

                            <ul className={`dropdown-menu ${openMobileDropdown ? 'is-open' : ''}`}>
                                <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For Android</NavLink></li>
                                <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For IOS</NavLink></li>
                                <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For Windows</NavLink></li>
                                <li className='dropdown-menu-item'><NavLink className='dropdown-menu-item-link' to="/">For Linux</NavLink></li>
                            </ul>
                        </li>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/exhibitions">Exhibitions</NavLink></li>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/ourwork">Our Work</NavLink></li>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/blogs">Blogs</NavLink></li>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/resource">Resource</NavLink></li>
                        <li className="header-nav-list-item"><NavLink className='header-nav-list-item-link' to="/contact">Contact</NavLink></li>
                        <li className="header-nav-list-item"><button className='header-nav-list-item-button'>Get a Quote</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
