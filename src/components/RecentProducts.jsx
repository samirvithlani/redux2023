import React, { useEffect, useState } from 'react'

export const RecentProducts = (props) => {
    console.log(props);
    const [products, setproducts] = useState([])

    const sortByPrice = (a,b) => {

        return a.price - b.price;
    }
    useEffect(() => {
      
        // setproducts(props.cartData.cartData[0])
        setproducts(props.cartData.cartData[0]?.sort(sortByPrice))
      
    }, [])
    
  return (
    <div>
        RecentProducts
        {
        
            products?.map((item)=>{
                return (<div>
    
                    {item.name}
                </div>)
            })
        }
    </div>
  )
}
