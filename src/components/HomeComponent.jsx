import React from "react";

export const HomeComponent = (props) => {
  // console.log("HomeComponent", props);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663790290203" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">IPHONE 14 PRO</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={()=>props.addToCartHandler({id:101,"name":"iphone14 pro"})} className="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027868571" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">IPHONE 14</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={()=>props.addToCartHandler({id:102,"name":"iphone14"})} className="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
