
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-nav.png'
const Navbar = () => {
    return (
        <nav className='hidden md:grid text-white space-y-6 text-center'>
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