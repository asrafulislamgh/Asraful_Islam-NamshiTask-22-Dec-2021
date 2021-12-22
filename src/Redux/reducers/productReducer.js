import { ActionType } from "../contants.js/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODCUTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
