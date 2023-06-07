import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ProductComponent = (props) => {

    const [products, setproducts] = useState([])
    const getAllProducts = async() => {

        const res = await axios.get("http://localhost:3001/product/getall");
        setproducts(res.data.data)
        //if....
        props.getProductHandler(res.data.data)

    }
    useEffect(() => {
      
        getAllProducts();
    
      
    }, [])
    
  return (
    <div>ProductComponent</div>
  )
}
