import React from "react";
import { store_toolkit } from "./../../../index";
import { setLoadingOff } from "./../../../redux_toolkit/loadingSlice";
import { useParams } from "react-router-dom";
export default function UpdateCoursePage() {
  store_toolkit.dispatch(setLoadingOff());
  let params = useParams();
  console.log(params);

  return <div>UpdateCoursePage</div>;
}
