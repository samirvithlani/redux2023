export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
export const removeFromCart = (product) => {

  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  }

}
export const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
}

export const storeLogedinUser = (user) => {

  return{
    type: "STORE_LOGEDIN_USER",
    payload: user,
  }


}