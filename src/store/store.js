import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice/counterSlice";
import productSlice from "../features/productSlice/productSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice,
  },
});

export default store;
