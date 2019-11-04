import {
  GET_PRODUCT,
  GET_PRODUCT_STOCK,
  GET_ALL_PRODUCT_INFO,
  PRODUCT_ERROR,
  SET_LOADING,
  FILTER_OOS_PRODUCT,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
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

    case FILTER_OOS_PRODUCT:
      return {
        ...state,
        productsFiltered: state.productStock.variation_list.filter(
          stockItem => {
            if (stockItem.availability !== 0) return stockItem;
          }
        )
      };

    case CLEAR_FILTER:
      return {
        ...state,
        productsFiltered: null
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
