import React from 'react';
import success from '../images/success.png';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="container flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-xl text-gray-800 mb-8">Your order has been successfully placed.</p>
        <img src={success} alt="success" className="w-40 h-auto mb-8" />
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
