import {
  postCourseRegister,
  deleteCourseRegister,
} from "./../../service/userService";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, message } from "antd";
const columns = [
  {
    title: "Tên Khóa Học",
    dataIndex: "tenKhoaHoc",
    key: "tenKhoaHoc",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
  },
  {
    title: "Mô Tả",
    dataIndex: "moTa",
    key: "moTa",
  },

  {
    title: "Hành Động",
    dataIndex: "hanhDong",
    key: "hanhDong",
  },
];

export default function MyCourse() {
  const [course, setCourse] = useState([]);
  let user = useSelector((state) => {
    return state.userSlice.user;
  });

  useEffect(() => {
    postCourseRegister(user.taiKhoan)
      .then((res) => {
        console.log(res);
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.taiKhoan]);

  console.log("ChiTiet", course.chiTietKhoaHocGhiDanh);
  let courseArr = () => {
    return course.chiTietKhoaHocGhiDanh?.map((item) => {
      let dataCouser = {
        maKhoaHoc: item.maKhoaHoc,
        taiKhoan: user.taiKhoan,
      };
      let postDelete = (dataCouser) => {
        deleteCourseRegister(dataCouser)
          .then((res) => {
            console.log(res);
            message.success("xóa thành công");
            window.location.href = "/capnhat";
          })
          .catch((err) => {
            console.log(err);
            message.error("xóa thất bại");
          });
      };
      return {
        ...item,
        hanhDong: (
          <button
            type="button"
            onClick={() => {
              postDelete(dataCouser);
            }}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete
          </button>
        ),
        hinhAnh: <img width={100} src={item.hinhAnh} alt="" />,
        moTa: (
          <p>
            {item.moTa.length > 150
              ? item.moTa?.slice(0, 100) + "..."
              : item?.moTa}
          </p>
        ),
      };
    });
  };
  return (
    <div>
      <Table columns={columns} dataSource={courseArr()} />
    </div>
  );
}
