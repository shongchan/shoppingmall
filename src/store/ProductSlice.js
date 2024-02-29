import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

export const fetchProdWithId = createAsyncThunk("product", async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
});
const initialState = {
  shop: [],
  itemDetail: [],
  num: 0,
};
const ProductData = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.shop = action.payload;
    },
    [fetchProdWithId.fulfilled]: (state, action) => {
      state.itemDetail = action.payload;
    },
  },
});

export default ProductData.reducer;
