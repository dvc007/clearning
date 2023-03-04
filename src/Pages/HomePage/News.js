import React from "react";

export default function News() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-7x1">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              Mô Tả Khóa Học
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                src={require(`./../images/couser.png`)}
                alt="Imagex"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Fullstack Development
              </h2>
              <p className="leading-relaxed text-base">
                Học cách xây dựng các ứng dụng web đầy đủ tính năng bằng cách sử
                dụng cả phía frontend và backend.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                src={require(`./../images/backend.png`)}
                alt="Images"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Phát triển Backend
              </h2>
              <p className="leading-relaxed text-base">
                Học cách xây dựng các ứng dụng web có khả năng mở rộng và bền
                vững.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                src={require(`./../images/frontend.jpg`)}
                alt="Imagess"
              />

              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Phát triển Frontend
              </h2>
              <p className="leading-relaxed text-base">
                Học cách xây dựng các trang web và ứng dụng web đáp ứng bằng
                cách sử dụng các công nghệ frontend hiện đại như HTML, CSS và
                JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
