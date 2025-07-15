import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
import { errorReducer } from "./reducers/errorReducer";
import { createReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const user = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : [];

const initialState = {
  auth: { user: user },
  carts: { cart: cartItems },
};

export const store = configureStore({
  reducer: {
    products: productReducer,
    errors: errorReducer,
    carts: createReducer,
    auth: authReducer,
  },
  preloadedState: initialState,
});

export default store;

