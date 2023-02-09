import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/53882-distance-education.json";
import MovingComponent from "react-moving-text";

export default function Slider() {
  return (
    <div className="grid w-full h-3/6 grid-cols-2 mt-2 pt-2 bg-red">
      <div className="mt-28">
        <div className="flex justify-center">
          <div className="block p-10 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Chào mừng đến với môi trường
            </h5>
            <p className="text-gray-700 text-base mb-4">
              <MovingComponent
                type="jelly"
                duration="1000ms"
                delay="0s"
                direction="alternate-reverse"
                timing="ease"
                iteration="infinite"
                fillMode="none"
              >
                C-Learning
              </MovingComponent>
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              BẮT ĐẦU NÀO
            </button>
          </div>
        </div>
      </div>

      <div>
        <Lottie animationData={groovyWalkAnimation} />
      </div>
    </div>
  );
}
