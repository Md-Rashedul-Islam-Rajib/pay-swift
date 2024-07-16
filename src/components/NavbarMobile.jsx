import React, { useEffect, useRef, useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { GiCash, GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";

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

  return (
    <nav className="flex justify-between">
      <div></div>
      <div>
        <div className="relative inline-block">
          <button  onClick={toggleDropdown} className="bg-[#115263] text-white p-4 cursor-pointer hover:bg-white hover:text-[#155263] focus:bg-white focus:text-[#155263]">
          <FiAlignJustify />
          </button>
          {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 hidden bg-[#155263] min-w-40 shadow-lg"
        >
          <NavLink to="/send-money">
            <p className="flex items-center gap-2 justify-center">
              <GiTakeMyMoney /> <span>Send Money</span>
            </p>
          </NavLink>
          <NavLink to="/cash-out">
            <p className="flex items-center gap-2 justify-center">
              <GiPayMoney /> <span>Cash Out</span>
            </p>
          </NavLink>
          <NavLink to="/cash-in">
            <p className="flex items-center gap-2 justify-center">
              <GiReceiveMoney /> <span>Cash In</span>
            </p>
          </NavLink>
          <NavLink to="/balance-inquiry">
            <p className="flex items-center gap-2 justify-center">
              <GiCash /> <span>Balance Inquiry</span>
            </p>
          </NavLink>
          <NavLink to="/transaction-history">
            <p className="flex items-center gap-2 justify-center">
              <FaMoneyBillTransfer /> <span>Transaction History</span>
            </p>
          </NavLink>
        </div>
      )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
