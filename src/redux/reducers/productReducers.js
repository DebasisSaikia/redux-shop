import { ActionTypes } from "../constant/actions-types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
