import React, { useEffect, useState } from "react";
import { getCourse } from "./../../../service/CourseService";
import { userColums } from "./utilsCourse";
import { Table, message } from "antd";
import { deleteCourse } from "./../../../service/admindService";

export default function ListCourseUserPage() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      const handleRemoveUser = (account) => {
        deleteCourse(account)
          .then((result) => {
            message.success("Xóa thành công");
            fetchUserList();
            console.log(result);
          })
          .catch((err) => {
            message.error("Thất bại");
            console.log(err.response.data.content);
          });
      };

      getCourse()
        .then((result) => {
          console.log(result);

          let courseList = result.data.map((item, index) => {
            return {
              ...item,
              hinhAnh: <img className="w-40" src={item.hinhAnh} alt="" />,
              key: item.maKhoaHoc,
              soThuTu: (
                <div>
                  <div>{index}</div>
                </div>
              ),
              hanhDong: (
                <div className="space-x-5">
                  <div>
                    <button
                      onClick={() => {
                        message.error("Đang Phát Triển");
                      }}
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => {
                        handleRemoveUser(item.maKhoaHoc);
                      }}
                      type="button"
                      className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ),
            };
          });
          setCourse(courseList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);
  return (
    <div>
      <div className="my-5">
        {/* <a href="/admin/addcourse" className="text-3xl">
          Thêm Khóa Học Mới
        </a> */}
      </div>
      <Table columns={userColums} dataSource={course} />
    </div>
  );
}
