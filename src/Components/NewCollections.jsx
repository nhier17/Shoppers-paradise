import React from 'react'
import new_collections from "../Util"
import Items from "./Items"
import styled from "styled-components"

const NewCollections = () => {
  return (
    <Container>
       <h1>NEW COLLECTIONS</h1> 
       <Collections>
        {new_collections.map((item) => (
           <Items
           key={item.id}
           id={item.id}
           name={item.name}
           image={item.image}
           new_price={item.new_price}
           old_price={item.old_price}
           /> 
        ))}

       </Collections>
    </Container>
  )
}
const Container = styled.div`
margin-top: 5rem;
margin-bottom: 5rem;
   h1 {
      margin-bottom: 2rem;
    padding-left: 3rem;
    font-size: 19px;
   }
`
const Collections = styled.div`
  display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 1rem;
    @media (max-width: 768px) {
      display: flex;
      gap: 0.5rem;
      overflow: scroll;
scrollbar-color: black;
&::-webkit-scrollbar{
    display: none;
}
    }
    
 `

export default NewCollections