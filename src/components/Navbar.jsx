import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ openCart, cartButtonRef }) => {

    return (
        <header className='navbar'>
            <NavLink exact="true" className='navbar-link' to="/">Home</NavLink>
            <Link className='navbar-link' to="/images">Images</Link>
            <NavLink className='navbar-link' to="/facts">Facts</NavLink>
            <button ref={cartButtonRef} className='cart-btn' onClick={() => openCart()}>Cart</button>
        </header>
    );
}

export default Navbar;