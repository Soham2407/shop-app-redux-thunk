import axios from "axios";
import { productActionTypes } from "../actionTypes/productActionTypes";

const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productActionTypes.REQUEST_GET_PRODUCTS });
      const response = await axios.get("https://fakestoreapi.com/products");
      const { data } = response;
      dispatch({
        type: productActionTypes.SUCCESS_GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: productActionTypes.ERROR_GET_PRODUCTS,
        payload: err.response,
      });
    }
  };
};

const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: productActionTypes.REQUEST_GET_PRODUCT_DETAILS });
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = response.data;
      dispatch({
        type: productActionTypes.SUCCESS_GET_PRODUCT_DETAILS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: productActionTypes.ERROR_GET_PRODUCT_DETAILS,
        payload: err.response,
      });
    }
  };
};

const resetProductDetails = () => {
  return {
    type: productActionTypes.RESET_PRODUCT_DETAILS,
  };
};

export { getProducts, getProductDetails, resetProductDetails };
