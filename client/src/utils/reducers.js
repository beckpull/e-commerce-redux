import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

const initState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    // Updates the list of products in the store
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // Adds a single product to the cart and opens the cart
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    // Adds multiple products to the cart
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    // Updates the quantity of a specific product in the cart
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // Removes a specific product from the cart and closes the cart if empty
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    // Clears the entire cart and closes it
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    // Toggles the cart open or closed
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    // Updates the list of categories in the store
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    // Sets the current category to filter products
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // Returns the current state for any unknown action types
    default:
      return state;
  }
};
