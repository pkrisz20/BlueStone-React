import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DropdownMenu from './DropdownMenu';
import { useState } from 'react';
import { setLanguage, useTranslation } from 'react-multi-lang';

const Navbar = ({ openCart, cartButtonRef }) => {
    const cart = useSelector(state => state.cart.value);
    const trans = useTranslation();

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
        }]);

    const changeLanguage = (selectedLng) => {
        lang.map(item => { item.selected = (item.language === selectedLng) ? true : false });
        setLang(lang);
        const activeLanguage = lang?.filter(item => item.selected ? true : false);
        setSelectedLang(activeLanguage[0].language);
        setLanguage(activeLanguage[0].language.toLocaleLowerCase());
    }

    return (
        <header className='navbar'>
            <NavLink exact="true" className='navbar-link' to="/">{ trans('nav.home') }</NavLink>
            <NavLink className='navbar-link' to="/images">{ trans('nav.images') }</NavLink>
            <NavLink className='navbar-link' to="/facts">{ trans('nav.facts') }</NavLink>
            <div className="cart-link">
                <button ref={cartButtonRef} className='cart-btn' onClick={() => openCart()}><i className="fas fa-shopping-cart"></i></button>
                <span className='cart-link-counter'>{cart.length}</span>
            </div>
            <DropdownMenu items={lang} selectedLang={selectedLang} onClick={(selectedLng) => changeLanguage(selectedLng)} />
        </header>
    );
}

export default Navbar;