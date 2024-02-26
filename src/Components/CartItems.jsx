import React, { useContext,useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { RiCloseCircleLine } from 'react-icons/ri';
import styled from "styled-components"


const CartItems = () => {
  const { getProducts, cartItem, removeFromCart, totalCartItems } = useContext(ShopContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
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
      const total = await totalCartItems()
      setTotalPrice(total)
    }
    calculateTotalPrice()
  }, [totalCartItems]);


 

  return (
    <Container>
      <Details>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </Details>
      <hr />
      {cartProducts.map((e) => {
            
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <Format>
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p>KSh {e.new_price}</p>
                <button>{cartItem[e.id]}</button>
                <p>KSh {e.new_price * cartItem[e.id]}</p>
                <RiCloseCircleLine onClick={() => removeFromCart(e.id)} />
              </Format>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <Description>
        <Summary>
            <h2>Cart Summary</h2>
            <div>
                <TotalItems>
                    <p>Subtotal</p>
                    <p>KSh{totalPrice}</p>
                </TotalItems>
                <hr />
                <TotalItems>
                    <p>Shipping fee</p>
                    <p>Free</p>
                </TotalItems>
                <hr />
                <TotalItems>
                    <h3>Total</h3>
                    <h3>KSH {totalPrice}</h3>
                </TotalItems>
            </div>
            <button>CHECKOUT</button>
        </Summary>
        <PromoCode>
           <p>Enter your promo code</p> 
           <PromoBox>
            <input type="text" placeholder="promo code" />
            <button>Apply</button>
           </PromoBox>
        </PromoCode>
      </Description>
    </Container>
  );
};

const Container = styled.div`
 margin: 100px   170px; 
 hr {
    height: 3px;
    background: #e2e2e2;
    border: 0;
 }
`
const Details = styled.div`
 display: grid;
 grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr; 
 align-items: center;  
 gap: 75px;
 padding: 20px 0px;
 color: #454545;
 font-size: 18px;
 font-weight: 600;
`
const Format = styled(Details)`
 font-size: 14px;
 font-weight: 500;   
 img {
    
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
 }
 svg {
    font-size: 17px;
    margin: 0px 40px;
    cursor: pointer;
 }
 button {
    width: 64px;
    height: 50px;
    border: none;
    background: #E07E1B;
    border-radius: 8px;
    cursor: pointer;
 }

`
const Description = styled.div`
 display: flex;
 align-items: center;
 margin: 100px 0px;   
`
const Summary = styled.div`
flex: 1;
 display: flex; 
 flex-direction: column;
 margin-right: 100px;
 gap: 40px;
 button {
    width: 262px;
    height: 58px;
    border: none;
    font-size: 18px;
    background: #E07E1B;
    color: white;
    border-radius: 8px;
    cursor: pointer;
 }
`
const TotalItems = styled.div`
display: flex;
justify-content: space-between;
padding: 15px 0px;
`
const PromoCode = styled.div`
flex: 1;

 font-size: 16px;
 p {
    color: #555;
 }

`
const PromoBox = styled.div`
display: flex;
width: 504px;
height: 58px;
margin-top: 15px;
padding-left: 20px;
background: #eaeaea;
input {
    width: 330px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 8px;
    background: transparent;
}
button {
    width: 170px;
    height: 58px;
    font-size: 16px;
    border: none;
    border-radius: 80px;
    cursor: pointer;
    background: black;
    color: white;
}
`
export default CartItems;
