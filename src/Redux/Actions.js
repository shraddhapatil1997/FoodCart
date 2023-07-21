

import {FETCH_PRODUCTS,ADD_TO_CART,REMOVE_FROM_CART,INCREMENT,DECREMENT} from './Constants';
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // Simulating an API call or fetching data
      const response = await fetch('http://localhost:5000/images');
      const products = await response.json();
      

      // Dispatch the action with the fetched products
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};


export const removeFromCart = (Id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: Id,
  };
};

export const increment = (Id) => {
  return {
    type: INCREMENT,
   payload:Id
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    
  };
};