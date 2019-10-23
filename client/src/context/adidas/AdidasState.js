import React, { useReducer } from 'react';
import AdidasReducer from './adidasReducer';
import AdidasContext from './adidasContext';
import axios from 'axios';
import {
  GET_PRODUCT,
  GET_PRODUCT_STOCK,
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
    setLoading();

    try {
      const res = await axios.get(`/api/stock/${pid}`);

      dispatch({
        type: GET_PRODUCT,
        payload: res.data
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
        getProduct
      }}
    >
      {props.children}
    </AdidasContext.Provider>
  );
};

export default AdidasState;
