import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentDetails from "./PaymentDetails"

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`)

const Checkout = () => {

  return (
  
        <Elements stripe={stripePromise}>
            <PaymentDetails />
        </Elements>
    
  )
}

export default Checkout