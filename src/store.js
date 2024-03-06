import { applyMiddleware, createStore } from "redux";
import reducer from "./rducers/productReducers";
import { thunk } from "redux-thunk";

let middlewares = [thunk];

const initialState = {
  products: [],
  count: 0,
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
