import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ openCart, cartButtonRef }) => {
    const cart = useSelector(state => state.cart.value);

    return (
        <header className='navbar'>
            <NavLink exact="true" className='navbar-link' to="/">Home</NavLink>
            <NavLink className='navbar-link' to="/images">Images</NavLink>
            <NavLink className='navbar-link' to="/facts">Facts</NavLink>
            <div className="cart-link">
                <button ref={cartButtonRef} className='cart-btn' onClick={() => openCart()}><i className="fas fa-shopping-cart"></i></button>
                <span className='cart-link-counter'>{cart.length}</span>
            </div>
        </header>
    );
}

export default Navbar;