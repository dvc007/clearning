import { useParams } from "react-router-dom";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { getSearchCourse } from "./../../service/CourseService";

export default function SearchCourse() {
  let params = useParams();
  const [searchcourser, setSearchCourser] = useState([]);
  useEffect(() => {
    getSearchCourse(params.tenKhoaHoc)
      .then((result) => {
        console.log(result);
        setSearchCourser(result.data);
      })
      .catch((err) => {
        message.console.error("Không tìm thấy khóa học");
        console.log(err);
      });
  }, [params.tenKhoaHoc]);
  return (
    <div>
      {searchcourser.map((item, index) => {
        return (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/#">
              <img
                className="p-8 rounded-t-lg pt-6 h-96 object-cover"
                src={item.hinhAnh}
                alt="product"
              />
            </a>
            <div className="px-5 pb-5">
              <a href={`/detail/${item.maKhoaHoc}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.tenKhoaHoc}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  399.000<sup>đ</sup>
                </span>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    window.location.href = `/detail/${item.maKhoaHoc}`;
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2  text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Xem Chi Tiết
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2 mx-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Dang Ky
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
