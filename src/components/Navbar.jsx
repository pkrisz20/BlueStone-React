import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DropdownMenu from './DropdownMenu';
import { useTranslation } from 'react-multi-lang';

const Navbar = ({ openCart, cartButtonRef, lang, changedLang, selectedLang }) => {
    const cart = useSelector(state => state.cart.value);
    const trans = useTranslation();

    return (
        <header className='navbar'>
            <NavLink exact="true" className='navbar-link' to={`/${selectedLang.toLowerCase()}`}>{ trans('nav.home') }</NavLink>
            <NavLink className='navbar-link' to={`${selectedLang.toLowerCase()}/images`}>{ trans('nav.images') }</NavLink>
            <NavLink className='navbar-link' to={`${selectedLang.toLowerCase()}/facts`}>{ trans('nav.facts') }</NavLink>
            <NavLink className='navbar-link' to={`${selectedLang.toLowerCase()}/contact`}>{ trans('nav.contact') }</NavLink>
            <div className="cart-link">
                <button ref={cartButtonRef} className='cart-btn' onClick={() => openCart()}><i className="fas fa-shopping-cart"></i></button>
                <span className='cart-link-counter'>{cart.length}</span>
            </div>
            <DropdownMenu items={lang} selectedLang={selectedLang} onClick={(selectedLng) => changedLang(selectedLng)} />
        </header>
    );
}

export default Navbar;