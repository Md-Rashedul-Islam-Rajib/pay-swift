import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { GiTakeMyMoney, GiPayMoney, GiReceiveMoney, GiCash, GiMoneyStack } from 'react-icons/gi';
import { FaMoneyBillTransfer, FaUsers } from 'react-icons/fa6';
import logo from '../assets/logo-nav.png'

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex justify-between bg-[#155263]">
     <div>
        <img src={logo} alt="" className='w-12' />
     </div>
     <div>
     <button
        onClick={toggleDropdown}
        className="p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
     </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-10 mt-2 py-2 bg-[#155263] text-white rounded-md shadow-lg"
        >
          <NavLink
            to="/send-money"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <GiTakeMyMoney /> <span>Send Money</span>
          </NavLink>
          <NavLink
            to="/cash-out"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <GiPayMoney /> <span>Cash Out</span>
          </NavLink>
          <NavLink
            to="/cash-in"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <GiReceiveMoney /> <span>Cash In</span>
          </NavLink>
          <NavLink
            to="/balance-inquiry"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <GiCash /> <span>Balance Inquiry</span>
          </NavLink>
          <NavLink
            to="/transaction-history"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <FaMoneyBillTransfer /> <span>Transaction History</span>
          </NavLink>
          <NavLink
            to="/transaction-management"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <GiMoneyStack /> <span>Transaction Management</span>
          </NavLink>
          <NavLink
            to="/transaction-history-agent"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <FaMoneyBillTransfer /> <span>Transaction History</span>
          </NavLink>
          <NavLink
            to="/user-management"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <FaUsers /> <span>User Management</span>
          </NavLink>
          <NavLink
            to="/transaction-history-admin"
            onClick={handleMenuItemClick}
            className="block px-4 py-2 text-white hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <FaMoneyBillTransfer /> <span>Transaction History</span>
          </NavLink>

        </div>
      )}
    </div>
  );
};

export default NavbarMobile;