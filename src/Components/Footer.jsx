import React from 'react';
import logo from '../images/logo_big.png';
import { FaInstagram, FaWhatsapp, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-28 flex flex-col items-center  overflow-x-hidden">
      <div className="flex items-center gap-5">
        <img src={logo} alt="logo" />
        <p className="text-gray-600 text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex gap-4 md:gap-12 list-none text-lg">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contacts</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-2.5 bg-gray-100 border border-gray-200">
          <FaInstagram />
        </div>
        <div className="p-2.5 bg-gray-100 border border-gray-200">
          <FaWhatsapp />
        </div>
        <div className="p-2.5 bg-gray-100 border border-gray-200">
          <FaPinterest />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 w-full mb-8 text-gray-800 text-xl">
        <p>&copy; {new Date().getFullYear()} Shoppers paradise</p>
        <hr className="w-4/5 border-none rounded-lg h-1 bg-gray-400" />
      </div>
    </div>
  );
};

export default Footer;
