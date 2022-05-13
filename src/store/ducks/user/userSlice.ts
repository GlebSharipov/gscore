import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    addUserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    resetUserData: (state) => {
      state.userName = "";
      state.token = "";
    },
  },
});

export const { addUserName, addUserToken, resetUserData } = userSlice.actions;

export default userSlice.reducer;
