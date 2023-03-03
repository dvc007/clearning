import React from "react";
import { store_toolkit } from "./../../../index";
import { setLoadingOff } from "./../../../redux_toolkit/loadingSlice";
export default function AddCourseUserPage() {
  store_toolkit.dispatch(setLoadingOff());

  return <div>AddCourseUserPage</div>;
}
