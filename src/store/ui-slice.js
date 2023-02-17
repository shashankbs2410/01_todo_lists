import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { signedIn: false },
  reducers: {
    toggeSignIn(state) {
      state.signedIn = !state.signedIn;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
