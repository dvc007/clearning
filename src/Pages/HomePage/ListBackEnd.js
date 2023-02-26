import React, { useEffect, useState } from "react";
import { getCourseByCategoryBackEnd } from "../../service/CourseService";
import { Fade } from "react-awesome-reveal";
import { postRegisterCourse } from "./../../service/CourseService";
import { message } from "antd";
import { useSelector } from "react-redux";

export default function ListBackEnd() {
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  const [CourseByCategory, setCourseByCategory] = useState([]);
  useEffect(() => {
    getCourseByCategoryBackEnd()
      .then((result) => {
        // console.log(result);
        setCourseByCategory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderCourseList = () => {
    return CourseByCategory?.slice(0, 4).map((item, index) => {
      return (
        <div className="" key={index}>
          <div className="container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="p-8 rounded-t-lg pt-6 h-full object-cover"
              src={require(`./../images/backend.png`)}
              alt="product"
            />
            <div className="px-5 pb-5">
              <a href={`/detail/${item.maKhoaHoc}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.tenKhoaHoc.length > 15
                    ? item.tenKhoaHoc.substring(0, 15) + "..."
                    : item.tenKhoaHoc}
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
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  399.000<sup>đ</sup>
                </span>
              </div>
              <div className="flex gap-4 mt-5">
                <button
                  onClick={() => {
                    window.location.href = `/detail/${item.maKhoaHoc}`;
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Xem Chi Tiết
                </button>
                <button
                  onClick={() => {
                    let axiosArr = {
                      maKhoaHoc: `${item.maKhoaHoc}`,
                      taiKhoan: user.taiKhoan,
                    };
                    postRegisterCourse(axiosArr)
                      .then((result) => {
                        message.success("Đăng Ký Khóa Học Thành Công");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Dang Ky
                </button>
              </div>
            </div>
          </div>
        </div>

        /* <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-40 w-full  object-center p-8 rounded-t-lg pt-6  object-cover"
              src={item.hinhAnh}
              alt="Product"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                {item.tenKhoaHoc.length > 15
                  ? item.tenKhoaHoc.substring(0, 15) + "..."
                  : item.tenKhoaHoc}
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
                <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                  $25.00
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20% off
                </p>
              </div>
              <div className="flex gap-4 mt-5">
                <button
                  onClick={() => {
                    window.location.href = `/detail/${item.maKhoaHoc}`;
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Xem Chi Tiết
                </button>
                <button
                  onClick={() => {
                    let axiosArr = {
                      maKhoaHoc: `${item.maKhoaHoc}`,
                      taiKhoan: user.taiKhoan,
                    };
                    postRegisterCourse(axiosArr)
                      .then((result) => {
                        message.success("Đăng Ký Khóa Học Thành Công");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Dang Ky
                </button>
              </div>
            </div>
          </div> */
      );
    });
  };
  return (
    <>
      <h2 className="font-bold uppercase m-6">Khóa học Back End</h2>

      <div className="grid mx-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Fade duration={1000} triggerOnce direction="left">
          {renderCourseList()}
        </Fade>
      </div>
    </>
  );
}
