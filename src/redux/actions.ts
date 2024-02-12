export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};

export const updateCartItemQuantity = (productId, quantity) => {
  return {
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: { productId, quantity },
  };
};

export const increment = (productId) => {
  return{
    type: 'INCREMENT',
    payload: productId
  }
}

export const decrement = (productId) => {
  return{
    type: 'DECREMENT',
    payload: productId
  }
}

export const calculateTotal = () => {
  return {
    type: 'CALCULATE_TOTAL',
  };
};
