import React, { useContext,useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { RiCloseCircleLine } from 'react-icons/ri';

const CartItems = () => {
  const { getProducts, cartItem, removeFromCart } = useContext(ShopContext);
  const [cartProducts, setCartProducts] = useState([]);

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

 

  return (
    <div>
      <div className="tails">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartProducts.map((e) => {
            
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="formaat">
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p>KSh {e.new_price}</p>
                <button>{cartItem[e.id]}</button>
                <p>KSh {e.new_price * cartItem[e.id]}</p>
                <RiCloseCircleLine onClick={() => removeFromCart(e.id)} />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
