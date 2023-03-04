import React from "react";
export default function EventLandingPage() {
  return (
    <div id="blog" className=" px-4 xl:px-0 py-12">
      <div className="mx-auto container">
        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
          Blog
        </h1>
        <div className="mt-12 lg:mt-24">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div>
              <img
                className="w-full"
                src={require("./img/baner.jpg")}
                alt="computer"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">
                  Đào Văn Châu
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  13TH Oct, 2020
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">
                  Căn chỉnh mọi phần tử với thuộc tính position?
                </h1>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                  Phần 3 Căn chỉnh phần tử (position) với hàm translate(); Phần
                  4 Căn chỉnh phần tử (position) với margin auto?
                </p>
                <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                  <p className="text-base tracking-wide text-indigo-500">
                    Đọc Thêm
                  </p>
                  <svg
                    className="ml-3 lg:ml-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                      stroke="#4338ca"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 8.53662H19"
                      stroke="#4338ca"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="h-5 w-2" />
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <img
                    className="w-full"
                    src={require("./img/banner.jpg")}
                    alt="games"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      Đào Văn Châu
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Chuyển nghề sang lập trình có khó khăn như nhiều người
                      nghĩ?{" "}
                    </h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                      Trong thời đại số hiện nay, thế giới trở nên “phẳng” hơn
                      và cơ hội cũng mở ra nhiều hơn với tất cả mọi người. Người
                      ta có thể thay...
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="w-full"
                    src={require("./img/sizetex.webp")}
                    alt="notes"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      Đào Văn Châu
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Tự học lập trình có khó không? 5 tips để tự học tốt hơn
                    </h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                      Lập trình đang dần trở thành một ngành “hot” và là xu thế
                      của nhiều người trẻ hiện nay. Vậy tự học lập trình có khó
                      không? Bài viết...
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <img
                    className="w-full"
                    src={require("./img/technlgy.jpg")}
                    alt="laptop"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      Đào Văn Châu
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Lập trình là gì? Nghề lập trình có thật là lương “ngàn
                      đô”?
                    </h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                      Nghề lập trình đang là một từ khóa vô cùng hot và có mật
                      độ tìm kiếm rất lớn. Nhưng thực sự lập trình là gì và đây
                      có phải là một...
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="w-full"
                    src={require("./img/blog(5).png")}
                    alt="worker"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      Đào Văn Châu
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Using CKEditor 5 in ReactJS (include upload images and
                      many cool functionalities)
                    </h1>
                    <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                      Hi there, in this article I will guide you guys on how to
                      use CKEditor v5 in React project..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
