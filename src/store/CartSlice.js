import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: !localStorage.getItem('cart') ? [] : JSON.parse(localStorage.getItem('cart')),
  userInfo: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initiateCart: (state, action) => {
      state.products = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },

    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    reduceProduct(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } else if (state.products[itemIndex].quantity === 1) {
        const updatedproducts = state.products.filter(
          (p) => p.id !== action.payload.id
        );
        state.products = updatedproducts;
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    incrementProduct(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.products[itemIndex].quantity >= 1) {
        state.products[itemIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { initiateCart, addToCart, reduceProduct, incrementProduct } = CartSlice.actions;
export default CartSlice.reducer;
