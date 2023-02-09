import React from "react";

export default function NotFoundPage() {
  return (
    <div>
      <div class="flex items-center justify-center py-12">
        <div class="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
          <div class="flex flex-col items-center py-16">
            <img
              class="px-4 hidden md:block"
              src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
            />
            <img
              class="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
            />
            <h1 class="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">
              OOPS!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
