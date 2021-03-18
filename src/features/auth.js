import { createSlice } from "@reduxjs/toolkit";

export const authFeature = createSlice({
  name: "auth",
  initialState: {
    isUserLoggedIn: false,
    userData: {},
  },
  reducers: {
    logUserIn: (state, { payload }) => {
      state.isUserLoggedIn = true;
      state.userData = payload;
    },
  },
});

export const { logUserIn } = authFeature.actions;
export default authFeature.reducer;
