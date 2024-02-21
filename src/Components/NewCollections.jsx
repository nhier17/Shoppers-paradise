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
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   margin-bottom: 100px;
`
const Collections = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);  
 gap: 10px; 
 margin-top: 50px;
`

export default NewCollections