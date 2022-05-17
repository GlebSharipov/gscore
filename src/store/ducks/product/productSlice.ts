import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "src/types";

type InitialProductStateType = {
  selectedProduct: ProductType | null;
  productId: number | null;
  subscribeId: number | null;
};

const initialState: InitialProductStateType = {
  selectedProduct: null,
  productId: null,
  subscribeId: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct(state, { payload }: PayloadAction<ProductType>) {
      state.selectedProduct = payload;
    },

    upgradeProduct(
      state,
      { payload }: PayloadAction<{ productId: number; subscribeId: number }>
    ) {
      state.productId = payload.productId;
      state.subscribeId = payload.subscribeId;
    },

    resetUpgrade(state) {
      state.productId = null;
      state.subscribeId = null;
    },
  },
});

export const { selectProduct, upgradeProduct, resetUpgrade } =
  productsSlice.actions;

export default productsSlice.reducer;
