import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/53882-distance-education.json";
import MovingComponent from "react-moving-text";
import { Slide } from "react-awesome-reveal";
export default function Slider() {
  return (
    <Slide
      duration={2000}
      triggerOnce
      direction="down"
      className="flex flex-col justify-center items-center"
    >
      <div className="flex justify-around w-full h-3/6 max-[760px]:inline-block max-[760px]:-mt-28  mt-2 pt-2 bg-red ">
        <div className="max-[760px]:order-2 max-[760px]:mt-24 order-1">
          <Lottie animationData={groovyWalkAnimation} />
        </div>

        <div className="mt-28 ml-5 max-[760px]:mt-1">
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
      </div>
    </Slide>
  );
}
