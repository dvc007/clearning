import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, payload) => {
      state.payload = true;
    },
    setLoadingOff: (state, payload) => {
      state.payload = false;
    },
  },
});
export const { setLoadingOn, setLoadingOff } = spinnerSlice.actions;
export default spinnerSlice.reducer;
