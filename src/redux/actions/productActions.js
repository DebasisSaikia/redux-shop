import fakeApi from "../../api/fakeApi";
import { ActionTypes } from "../constant/actions-types";
import axios from "axios";

// export const fetchData =async (dispatch) => {
//   const response = await fakeApi.get('/products');
//   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
// };

export function fetchData() {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => dispatch(productFetch(data.data)));
  };
}

const productFetch = (data) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS,
    payload: data,
  };
};
