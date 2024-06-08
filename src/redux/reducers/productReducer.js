import { productActionTypes } from "../actionTypes/productActionTypes";

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.REQUEST_GET_PRODUCTS:
      return { ...state, products: [], loading: true, error: "" };

    case productActionTypes.SUCCESS_GET_PRODUCTS:
      return { ...state, products: action.payload, loading: false, error: "" };

    case productActionTypes.ERROR_GET_PRODUCTS:
      return { ...state, products: [], loading: false, error: action.payload };

    case productActionTypes.REQUEST_GET_PRODUCT_DETAILS:
      return { ...state, product: {}, loading: true, error: "" };

    case productActionTypes.SUCCESS_GET_PRODUCT_DETAILS:
      return { ...state, product: action.payload, loading: false, error: "" };

    case productActionTypes.ERROR_GET_PRODUCT_DETAILS:
      return { ...state, product: {}, loading: false, error: action.payload };

    case productActionTypes.RESET_PRODUCT_DETAILS:
      return { ...state, product: {} };

    default:
      return state;
  }
};

export default productReducer;
