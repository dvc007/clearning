import React from "react";

export default function NotFoundPage() {
  return (
    <div>
      <div className="flex items-center justify-center py-12">
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
          <div className="flex flex-col items-center py-16">
            <img
              className="px-4 hidden md:block"
              src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
              alt="s"
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt="s"
            />
            <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">
              OOPS!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
