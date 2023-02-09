import React, { useEffect, useState } from "react";
import { getCourse } from "./../../../service/CourseService";
import { userColums } from "./utilsCourse";
import { Table, message } from "antd";
import { deleteUser } from "./../../../service/amindService";

export default function ListCourseUserPage() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      const handleRemoveUser = (account) => {
        deleteUser(account)
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

          let courseList = result.data.map((item) => {
            const number = () => {
              let num = 1;
              return ++num + 1;
            };
            return {
              ...item,
              hinhAnh: <img className="w-40" src={item.hinhAnh} alt="" />,
              key: item.maKhoaHoc,
              soThuTu: (
                <div>
                  <div>{number()}</div>
                </div>
              ),
              hanhDong: (
                <div className="space-x-5">
                  <div>
                    <button
                      type="button"
                      className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Ghi Danh
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => {
                        handleRemoveUser(item.taiKhoan);
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
      <Table columns={userColums} dataSource={course} />
    </div>
  );
}
