const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_CART_ITEM_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'INCREMENT':
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

      case 'DECREMENT':
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0),
      };

    case 'CALCULATE_TOTAL':
      const total = state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      return {
        ...state,
        total: total,
      };
    default:
      return state;
  }
};

export default cartReducer;
