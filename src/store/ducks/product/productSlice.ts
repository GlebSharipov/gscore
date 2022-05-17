import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "src/types";

type InitialProductStateType = {
  selectedProduct: ProductType | null;
};

const initialState: InitialProductStateType = {
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct(state, { payload }: PayloadAction<ProductType>) {
      state.selectedProduct = payload;
    },
  },
});

export const { selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
