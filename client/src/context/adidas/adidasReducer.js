import {
  GET_PRODUCT,
  GET_PRODUCT_STOCK,
  GET_ALL_PRODUCT_INFO,
  PRODUCT_ERROR,
  SET_LOADING
} from '../types';

export default (state, action) => {
  console.log('Inside reducer', action.payload);

  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
        productError: null
      };

    case GET_PRODUCT_STOCK:
      return {
        ...state,
        productStock: action.payload,
        loading: false,
        productError: null
      };

    case GET_ALL_PRODUCT_INFO:
      return {
        ...state,
        productStock: action.payload.resStock,
        product: action.payload.resInfo,
        loading: false,
        productError: null
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        productError: action.payload,
        product: null,
        productStock: null,
        loading: false
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
