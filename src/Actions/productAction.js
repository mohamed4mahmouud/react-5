import axios from "axios";

export const getProducts = () => {
  return async function (dispatch) {
    let { data } = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "GETPRODUCTS", payload: data.products });
  };
};

export const getProd = (id) => {
  return async function (dispatch) {
    let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    dispatch({ type: "SHOWPRODUCT", payload: data });
  };
};

export const countProduct = () => {
  return function (dispatch) {
    dispatch({ type: "INC" });
  };
};
