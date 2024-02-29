import { configureStore } from "@reduxjs/toolkit";
import RestData from "./ProductSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    data: RestData,
    cart: CartSlice,
  },
});

export default store;
