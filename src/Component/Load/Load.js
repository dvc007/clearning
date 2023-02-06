import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
export default function Load() {
  let isLoading = useSelector((state) => {
    return state.spinnerSlice.isLoading;
  });
  return isLoading ? (
    <div className="bg-black h-screen w-screen fixed top-0 z-50 flex justify-center items-center">
      <RingLoader color="red" size={50} speedMultiplier={2} />
    </div>
  ) : (
    <></>
  );
}
