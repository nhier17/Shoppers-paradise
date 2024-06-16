import React from 'react';
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className="container flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-red-600 text-4xl md:text-5xl mb-4">Something went wrong!</h1>
                <p className="text-gray-800 text-lg mb-8">Please try again later.</p>
                <div className="text-6xl mb-8">
                    <MdCancel />
                </div>
                <Link 
                    to="/" 
                    className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded text-lg transition-colors duration-300"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default Success;
