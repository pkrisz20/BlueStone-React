import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/facts">Facts</Link>
        </header>
    )
}

export default Navbar;
