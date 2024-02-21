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

   margin-bottom: 100px;
   h1 {
    padding-left: 3rem;
   }
`
const Collections = styled.div`
  display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
 `

export default NewCollections