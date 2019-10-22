import {
  GET_PRODUCT,
  GET_PRODUCT_STOCK,
  PRODUCT_ERROR,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        productError: action.payload
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
