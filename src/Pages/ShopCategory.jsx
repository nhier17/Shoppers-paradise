import React, {useContext,useState, useEffect} from 'react'
import {ShopContext} from "../Context/ShopContext"
import { IoIosArrowDropdown } from "react-icons/io";
import Items from "../Components/Items"
import styled from "styled-components"




const ShopCategory = ({image,category}) => {
  const {getProducts} = useContext(ShopContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProducts(data.products)
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
      <Products>
      {products?.map((product) => {
        if (category === product.category) {
          return <Items 
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          new_price={product.new_price}
          old_price={product.old_price}  
          />
        } else {
          return null
        }
})}
      </Products>
      <LoadMore>
      Explore More
      </LoadMore>  
    </Container>
  )
}
const Container = styled.div`
 
`
const Banner = styled.div`
  img {
    display: block;
    margin: 30px auto;
    width: 82%;
    }
`
const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 170px;
  p {
    font-size: 14px;
    color: #8c8c8c;
    margin: 0px 10px;
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
grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
grid-gap: 2rem;
margin-top: 1rem;
`
const LoadMore = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 150px auto;
width: 233px;
height: 69px;
border-radius: 75px;
background: #ededed;
color: #787878;
font-size: 19px;
font-weight: 600;
`

export default ShopCategory