import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentDetails = () => {
    const navigate = useNavigate();
    const { cartItem, totalPrice, setCartItem } = useContext(ShopContext);
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [addressDetails, setAddressDetails] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({ ...addressDetails, [name]: value });
    };

    const cartItemsArr = Object.keys(cartItem).map(key => ({
        _id: key,
        quantity: cartItem[key]
    }));

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setError('Stripe has not been initialized yet.');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("https://shoppers-paradise17.onrender.com/api/payments/create-payment-intent", {
                amount: totalPrice,
                currency: 'ksh',
                items: cartItemsArr,
                addressDetails
            });
            const { clientSecret } = response.data;
            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: addressDetails.name,
                        email: addressDetails.email,
                        address: {
                            line1: addressDetails.address,
                            city: addressDetails.city,
                            state: addressDetails.state,
                            postal_code: addressDetails.postalCode,
                        }
                    }
                }
            });

            if (error) {
                throw new Error(error.message);
            }

            toast.success('Payment successful!');
            setCartItem(prevCartItem => {
                const resetCart = {};
                Object.keys(prevCartItem).forEach(key => {
                    resetCart[key] = 0;
                });
                return resetCart;
            });
            navigate('/success');
        } catch (error) {
            console.error("Error during payment", error.message);
            toast.error('Error during payment!');
            setError(error.message);
            navigate('/cancel');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container flex justify-center items-center h-screen w-screen">
            <form id="payment-form" onSubmit={paymentHandler} className="w-full max-w-lg p-6 shadow-lg rounded-lg bg-white">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={addressDetails.name}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={addressDetails.email}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={addressDetails.address}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        value={addressDetails.city}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State</label>
                    <input
                        type="text"
                        name="state"
                        value={addressDetails.state}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={addressDetails.postalCode}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <CardElement id="cardElement" className="p-2 border rounded" />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    {loading ? <Spinner /> : <span>Pay Now</span>}
                </button>
                {error && <div className="text-red-500 text-sm mt-2 text-center">{error}</div>}
            </form>
        </div>
    );
};

const Spinner = () => (
    <div className="w-6 h-6 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
);

export default PaymentDetails;
