import React from 'react'
import axios from 'axios';
//stripe
import {
    CardElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';


const PaymentDetails = ({ onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();

//payments handler
const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        return;
    }
    const cardElement = elements.getElement(CardElement);
    try {
        const { token } = await stripe.createToken(cardElement)
        const response = await axios.post('https://shoppers-paradise17.onrender.com/api/payments/create-payment-intent', {
            token: token.id
        })
        console.log(response.data)
        //check response
        if (response.data.success) {
            onSuccess();
        } else {
            console.error('Payment failed', response.data.error)
        }
    } catch (error) {
        console.log("Error during payment", error);
    }
}

  return (
    <div>
          <form onSubmit={paymentHandler}>
            <div className="payment-element">
                <CardElement />
            </div>
            <button type="submit">
                <div className="spinnerhidden"></div>
                <span>Pay Now</span>
            </button>
            <div className="payment-message"></div>
        </form>
    </div>
  )
}

export default PaymentDetails