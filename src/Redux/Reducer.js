import {FETCH_PRODUCTS,ADD_TO_CART,REMOVE_FROM_CART, INCREMENT,DECREMENT} from './Constants';


const initialState = {
      products: [],
      cart: [],
      quantity:0
    };
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCH_PRODUCTS:
          return {
            ...state,
            products: action.payload,
          };
        case ADD_TO_CART:
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
          case REMOVE_FROM_CART:
            return {
              ...state,
              cart: state.cart.filter((item) => item.Id !== action.payload),
            };

            case INCREMENT:
              return{
                ...state,
                quantity:[Number(state.quantity)+1]
                };

              case DECREMENT:
              return{
              ...state,
              quantity:[Number(state.quantity)-1]
              };
        default:
          return state;
      }
    };
    
    export default reducer;
    