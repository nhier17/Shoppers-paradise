import React, {useContext,useState, useEffect} from 'react'
import {ShopContext} from "../Context/ShopContext"
import { IoIosArrowDropdown } from "react-icons/io";
import Items from "../Components/Items"
import styled from "styled-components"
import { toast } from "sonner"



const ShopCategory = ({image,category}) => {
  const {getProducts} = useContext(ShopContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  let image_url = "https://shoppers-paradise17.onrender.com"

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        toast.error("error fetching products")
      } finally {
        setLoading(false)
      }
     
    }
    fetchData()
  } ,[getProducts])

  
  return (
    <Container>
      <Banner>
      <img src={image} alt="banner" />
      </Banner>
      <Sort>
        <p><span>showing 1-12</span> out of 36 products</p>
        <Contents>
          Sort by <IoIosArrowDropdown />
        </Contents>
      </Sort>
      {loading ? (
        <div><LoadingMessage>Loading...</LoadingMessage></div>
        ) : (
  
      <Products>
      {products?.map((product) => {
        if (category === product.category) {
          return <Items 
          key={product._id}
          id={product._id}
          name={product.name}
          image={image_url+product.image}
          new_price={product.new_price}
          old_price={product.old_price}  
          
          />
        } else {
          return null
        }
})}
      </Products>
      )}
      <LoadMore>
      Explore More
      </LoadMore>  
    </Container>
  )
}
const Container = styled.div`
   margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
`
const Banner = styled.div`
  img {
    display: block;
    margin: 30px auto;
    width: 100%;
    }
`
const Sort = styled.div`
   display: flex;
   justify-content: space-between;
  margin: 10px 0;
  p {
    font-size: 14px;
    color: #8c8c8c;
    margin-bottom: 5px;
  }
  span {
   
    font-weight: 600;
  }

`
const Contents = styled.div`
padding: 10px 20px;
border-radius: 40px;
border: 1px solid #888; 
`
const Products = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
grid-gap: 4rem;
margin-top: 1rem;
margin: 0 auto;
max-width: 960px;
@media (max-width: 768px) {

display: flex;
gap: 0.5rem;
overflow-x: scroll;
overflow-y: hidden;
&::-webkit-scrollbar{
    display: none;
  
}
img {
  overflow: hidden;
}

}
`
const LoadMore = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 300px;
  height: 50px;
  border-radius: 25px;
  background: #ededed;
  color: #787878;
  font-size: 16px;
  font-weight: 600;
`
const LoadingMessage = styled.div`
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
`;
export default ShopCategory