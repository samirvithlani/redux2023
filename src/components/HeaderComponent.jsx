import React from "react";

export const HeaderComponent = (props) => {
    console.log("HeaderComponent", props);
    
  return (
    <div>
      <h1>HeaderComponent
        
      </h1>
      <span className="badge badge-primary">{props.cartData.cartData.length}</span>
      <div>
        {
          props.cartData.cartData.map((item) => {
            return <div>{item.name} &nbsp;
            <button onClick={()=>{props.removeFromCartHandler(item)}} className="btn btn-danger">REMOVE</button>
            </div>
          })
        }
      </div>
    </div>
  );
};
