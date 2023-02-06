import { createSlice } from "@reduxjs/toolkit";
import { userLocalService } from "../service/localService";

const initialState = {
  user: userLocalService.get(),
  userFind: "",
  courseFind: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    setUserFind: (state, action) => {
      state.userFind = action.payload;
    },
    setCourseFind: (state, action) => {
      state.courseFind = action.payload;
    },
  },
});

export const { setUserInfo, setUserFind, setCourseFind } = userSlice.actions;
export default userSlice.reducer;
