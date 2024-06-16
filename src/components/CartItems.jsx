import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { RiCloseCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CartItems = () => {
  const { getProducts, cartItem, removeFromCart, totalCartItems } = useContext(ShopContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  let image_url = "https://shoppers-paradise17.onrender.com";

  // add products to cart
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setCartProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [getProducts]);

  // getting total price of products in cart
  useEffect(() => {
    const calculateTotalPrice = async () => {
      const total = await totalCartItems();
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [totalCartItems]);

  // handle checkout
  const handleCheckout = async () => {
    try {
      const itemIds = Object.keys(cartItem).map(id => String(id));
      const response = await axios.post("https://shoppers-paradise17.onrender.com/api/payments/create-payment-intent", {
        items: itemIds.filter(id => cartItem[id] > 0)
      });
      const { data } = response;
      navigate(`/checkout?orderId=${data._id}`);
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-3xl shadow-md bg-white">
      {cartProducts.map((e) => {
        if (cartItem[e._id] > 0) {
          return (
            <div key={e._id} className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                <li className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img className="h-full w-full object-cover object-center" crossOrigin="anonymous" src={image_url + e.image} alt={e.name} />
              </div>
              
              <div className="ml-4 flex flex-1 flex-col">
              <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
              <p className="max-w-[20rem]">{e.name}</p>
              <p className="ml-4">KSh {e.new_price * cartItem[e._id]}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md">{cartItem[e._id]}</button>
              <div className="flex">
              <RiCloseCircleLine className="text-2xl cursor-pointer" onClick={() => removeFromCart(e._id)} />
              </div>
              </div>
              </div>
              </div>
                </li>
              </ul>
            </div>
          );
        }
        return null;
      })}
      <div className="flex flex-col items-center mt-12 space-y-8">
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal</p>
              <p>KSh {totalPrice}</p>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-medium">
              <p>Shipping fee</p>
              <p>0</p>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-semibold">
              <h3>Total</h3>
              <h3>KSh {totalPrice}</h3>
            </div>
          </div>
          <Link to="/checkout">
            <button onClick={handleCheckout} className="w-full mt-4 py-2 bg-orange-600 text-white text-lg font-medium rounded-md hover:bg-orange-700 transition-colors">CHECKOUT</button>
          </Link>
        </div>
        <div className="w-full max-w-xl text-lg font-medium text-gray-700">
          <p>Enter your promo code</p>
          <div className="flex mt-2 p-2 bg-gray-200 rounded-md">
            <input type="text" placeholder="promo code" className="w-3/4 p-2 bg-transparent border-none outline-none" />
            <button className="w-1/4 p-2 bg-black text-white rounded-md">Apply</button>
          </div>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or 
                  <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
      </div>
    </div>
  );
};

export default CartItems;
