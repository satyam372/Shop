import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import { Action } from "@remix-run/router";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // Add your reducers here
  },
});
// Add your reducers here
export default appStore;
