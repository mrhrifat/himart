import { ActionType } from "../constants/actionType";

export const categoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SET_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
};

export const categoryProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SET_CATEGORY_PRODUCT:
      return { ...state, categoryProduct: payload };
    case ActionType.REMOVE_CATEGORY_PRODUCT:
      return {};
    default:
      return state;
  }
};
