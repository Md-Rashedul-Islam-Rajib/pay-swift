
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-nav.png'
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
const Navbar = () => {
    return (
        <nav className='hidden md:grid text-white space-y-6 text-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <NavLink to='/send-money' ><p className='flex items-center gap-2 justify-center'><GiTakeMyMoney /> <span> Send Money </span></p></NavLink>
            <NavLink to='/cash-out' ><p className='flex items-center gap-2 justify-center'><GiPayMoney /> <span> Cash Out </span></p></NavLink>
            <NavLink to='/cash-in' ><p className='flex items-center gap-2 justify-center'><GiTakeMyMoney /> <span> Cash In </span></p></NavLink>
            <NavLink to='/balance-inquiry'><p className='flex items-center gap-2 justify-center'><GiTakeMyMoney /> <span> Balance Inquiry </span></p></NavLink>
            <NavLink to='/transaction-history' ><p className='flex items-center gap-2 justify-center'><GiTakeMyMoney /> <span> Transaction History </span></p></NavLink>
        </nav>
    );
};

export default Navbar;