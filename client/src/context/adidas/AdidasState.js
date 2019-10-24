import React, { useReducer } from 'react';
import AdidasReducer from './adidasReducer';
import AdidasContext from './adidasContext';
import axios from 'axios';
import {
  GET_PRODUCT,
  GET_PRODUCT_STOCK,
  GET_ALL_PRODUCT_INFO,
  PRODUCT_ERROR,
  SET_LOADING
} from '../types';

const AdidasState = props => {
  const initialState = {
    productStock: null,
    product: null,
    loading: false,
    productError: null
  };

  const [state, dispatch] = useReducer(AdidasReducer, initialState);

  const getProduct = async pid => {
    let pidUpper = pid.toUpperCase();
    setLoading();
    try {
      const res = await axios.get(`/api/stock/${pidUpper}`);

      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.data
      });
    }
  };

  const getProductStock = async (pid, region) => {
    let pidUpper = pid.toUpperCase();
    setLoading();
    try {
      const res = await axios.get(`/api/stock/nz/${pidUpper}`);

      dispatch({
        type: GET_PRODUCT_STOCK,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.data
      });
    }
  };

  const getAllProductInfo = async (pid, region) => {
    let pidUpper = pid.toUpperCase();
    setLoading();
    try {
      const resStock = await axios.get(`/api/stock/nz/${pidUpper}`);
      const resInfo = await axios.get(`/api/stock/${pidUpper}`);
      const productInfo = { resStock: resStock.data, resInfo: resInfo.data };

      dispatch({
        type: GET_ALL_PRODUCT_INFO,
        payload: productInfo
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.data
      });
    }
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <AdidasContext.Provider
      value={{
        productStock: state.productStock,
        product: state.product,
        loading: state.loading,
        productError: state.productError,
        getProduct,
        getProductStock,
        getAllProductInfo
      }}
    >
      {props.children}
    </AdidasContext.Provider>
  );
};

export default AdidasState;
