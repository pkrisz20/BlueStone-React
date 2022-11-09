import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='navbar'>
            <NavLink exact="true" className='navbar-link' to="/">Home</NavLink>
            <NavLink className='navbar-link' to="/images">Images</NavLink>
            <NavLink className='navbar-link' to="/facts">Facts</NavLink>
        </header>
    )
}

export default Navbar;
