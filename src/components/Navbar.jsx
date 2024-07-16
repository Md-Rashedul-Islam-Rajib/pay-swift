
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-nav.png'
import { GiCash, GiMoneyStack, GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
const Navbar = () => {
    return (
        <nav className='hidden md:grid text-white space-y-6 text-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <NavLink to='/send-money' ><p className='flex items-center gap-2 justify-center'><GiTakeMyMoney /> <span> Send Money </span></p></NavLink>
            <NavLink to='/cash-out' ><p className='flex items-center gap-2 justify-center'><GiPayMoney /> <span> Cash Out </span></p></NavLink>
            <NavLink to='/cash-in' ><p className='flex items-center gap-2 justify-center'><GiReceiveMoney /> <span> Cash In </span></p></NavLink>
            {/* <NavLink to='/balance-inquiry'><p className='flex items-center gap-2 justify-center'><GiCash /> <span> Balance Inquiry </span></p></NavLink> */}
            <NavLink to='/transaction-history' ><p className='flex items-center gap-2 justify-center'><FaMoneyBillTransfer /> <span> Transaction History </span></p></NavLink>
            <NavLink to='/transaction-management' ><p className='flex items-center gap-2 justify-center'><GiMoneyStack /> <span> Transaction Management </span></p></NavLink>
            <NavLink to='/transaction-history-agent' ><p className='flex items-center gap-2 justify-center'><FaMoneyBillTransfer /> <span> Transaction History </span></p></NavLink>
            <NavLink to='/transaction-history-agent' ><p className='flex items-center gap-2 justify-center'><FaMoneyBillTransfer /> <span> User Management </span></p></NavLink>
            <NavLink to='/transaction-history-agent' ><p className='flex items-center gap-2 justify-center'><FaMoneyBillTransfer /> <span> Transaction History </span></p></NavLink>
        </nav>
    );
};

export default Navbar;