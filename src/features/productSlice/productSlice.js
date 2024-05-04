import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    productName: "Monitor",
    price: 4000,
  },
  {
    id: 2,
    productName: "Mouse",
    price: 800,
  },
];
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
