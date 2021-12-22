import { ActionType } from "../contants.js/action-types";
export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODCUTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionType.SELECTED_PRODCUTS,
    payload: product,
  };
};
export const removeSelectedProducts = (product) => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODCUTS,
    payload: product,
  };
};
