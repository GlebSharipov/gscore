import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "src/types";

type InitialProductStateType = {
  selectedProduct: ProductType | null;
  productId?: number;
  subscribeId?: number;
};

const initialState: InitialProductStateType = {
  selectedProduct: null,
  productId: undefined,
  subscribeId: undefined,
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
      state.productId = undefined;
      state.subscribeId = undefined;
    },
  },
});

export const { selectProduct, upgradeProduct, resetUpgrade } =
  productsSlice.actions;

export default productsSlice.reducer;
