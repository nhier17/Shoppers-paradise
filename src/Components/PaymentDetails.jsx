import React,{ useState, useContext } from 'react'
import axios from 'axios';
import styled from "styled-components";
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
//stripe
import {
  CardElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';


const PaymentDetails = () => {
  const navigate = useNavigate()
  const { cartItem, totalPrice, setCartItem } = useContext(ShopContext)
     const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    //convert cartItem object to an array of items
    const cartItemsArr = Object.keys(cartItem).map(key => ({
      _id: key,
      quantity: cartItem[key]
    }))

//payments handler
const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe has not been initialized yet.');
       return;
    }
    try {
      const response = await axios.post("https://shoppers-paradise17.onrender.com/api/payments/create-payment-intent",{
        amount: totalPrice, 
        currency: 'ksh', 
        items: cartItemsArr
        
      });
      console.log(response.data);
      const { clientSecret } = await response.data
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card'),
        },
      });
      if (error) {
      throw new Error(error.message);
      }
      toast.success('Payment successful!')
      console.log('Payment successful');
      // reset cart items to 0 after successful payment
      setCartItem(prevCartItem => {
        const resetCart = {};
        Object.keys(prevCartItem).forEach(key => {
          resetCart[key] = 0
        });
        return resetCart;
      })
      navigate('/success')
    } catch (error) {
      console.error("Error during payment",error.message);
      toast.error('Error during payment!')
      setError(error.message);
      navigate('/cancel')
    } finally {
      setLoading(false);
    }
  
}

  return (
    <Container>
          <form id="payment-form" onSubmit={paymentHandler}>
            <PaymentElement className="payment-element">
            <CardElement id="cardElement" />
            </PaymentElement>
            <button type="submit" disabled={loading}>
            <Spinner className={`spinner ${loading ? '' : 'hidden'}`} id="spinner"></Spinner>
                <span>Pay Now</span>
            </button>
            <PaymentMessage id="payment-message" className={`message ${error ? '' : 'hidden'}`}>
        {error}
      </PaymentMessage>
        </form>
    </Container>
  )
}
const Container = styled.div`
  font-family:  sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  form {
    width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
  }
  button {
   background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;   
  } 
  &:hover {
    filter: contrast(115%);
  }
  &:disabled {
    opacity: 0.5;
  cursor: default;
  }
  @-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}
`
const Spinner = styled.div`
   color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0); 
  &:before,
  &:after {
    position: absolute;
  content: "";
  }
  &:before {
    width: 10.4px;
  height: 20.4px;
  background: #5469d4;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
  }
  &:after {
    width: 10.4px;
  height: 10.2px;
  background: #5469d4;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
  }
`
const PaymentMessage = styled.div`
   color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
`
const PaymentElement = styled.div`
 margin-bottom: 24px;
`
export default PaymentDetails