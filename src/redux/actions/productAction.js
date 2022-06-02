import { ActionType } from "../constants/actionType";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCT,
  };
};

export const setCategory = (categories) => {
  return {
    type: ActionType.SET_CATEGORY,
    payload: categories,
  };
};

export const setCategoryProduct = (categoryProduct) => {
  return {
    type: ActionType.SET_CATEGORY_PRODUCT,
    payload: categoryProduct,
  };
};

export const removeCategoryProduct = () => {
  return {
    type: ActionType.REMOVE_CATEGORY_PRODUCT,
  };
};
