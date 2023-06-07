export const cartData = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
export const productsData = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return [...state, action.payload];
    default:
      return state;
  }
}

export const logedinUser = (state = {}, action) => {
  switch (action.type) {
    case "STORE_LOGEDIN_USER":
      return action.payload;
    default:
      return state;
  }
}