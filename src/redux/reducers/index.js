import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { categoryReducer, categoryProductReducer } from "./categoryReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  categories: categoryReducer,
  categoryProduct: categoryProductReducer,
});

export default reducers;
