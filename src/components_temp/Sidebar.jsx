import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaCog, FaClipboardList } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-40`}
    >
      <div className="flex items-center justify-between h-20 border-b border-gray-700 px-4">
        <span className="text-2xl font-semibold">Dashboard</span>
        <button onClick={toggleSidebar} className="text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex-1 px-4 py-8 space-y-2">
        <Link
          to="/"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md"
        >
          <FaHome className="mr-2" /> Home
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md"
        >
          <FaChartBar className="mr-2" /> Dashboard
        </Link>
        <Link to="/orders" className="flex items-center p-4 hover:bg-gray-700">
          <FaClipboardList className="mr-3" />
          Orders
        </Link>
        <Link
          to="/settings"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md"
        >
          <FaCog className="mr-2" /> Settings
        </Link>
        <Link
          to="/logout"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md"
        >
          <CiLogout className="mr-2" /> Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
