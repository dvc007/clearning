import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, payload) => {
      state.isLoading = true;
    },
    setLoadingOff: (state, payload) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingOn, setLoadingOff } = loadingSlice.actions;

export default loadingSlice.reducer;
