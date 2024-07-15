
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-nav.jpg'
const Navbar = () => {
    return (
        <nav className='hidden md:grid text-white'>
            <div>
                <img src={logo} alt="" />
            </div>
            <NavLink to='/send-money' ><p>Send Money</p></NavLink>
            <NavLink to='/cash-out' ><p>Cash Out</p></NavLink>
            <NavLink to='/cash-in' ><p>Cash In</p></NavLink>
            <NavLink to='/balance-inquiry'><p>Balance Inquiry</p></NavLink>
            <NavLink to='/transaction-history' ><p>Transaction History</p></NavLink>
        </nav>
    );
};

export default Navbar;