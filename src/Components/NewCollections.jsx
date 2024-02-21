import React from 'react'
import new_collections from "../Util"
import Items from "./Items"

const NewCollections = () => {
  return (
    <div>
       <h1>NEW COLLECTIONS</h1> 
       <div className="collections">
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

       </div>
    </div>
  )
}

export default NewCollections