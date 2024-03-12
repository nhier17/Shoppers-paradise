import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentDetails from "./PaymentDetails"

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`)

const Checkout = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
  
    const successHandler = () => {
        setPaymentSuccess(true);
    }
  return (
    <div>
      <h1>Check out</h1>
      {paymentSuccess ? (
        <div>
            <h2>Payment Successful!</h2>
        </div>
      ): (
        <Elements stripe={stripePromise}>
            <PaymentDetails onSuccess={successHandler} />
        </Elements>
      )}
    </div>
  )
}

export default Checkout