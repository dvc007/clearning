import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import { deleteUser, getUserList } from "./../../../service/amindService";
import { userColums } from "./utilsUser";
import { useSelector } from "react-redux";
import { userLocalAdmin } from "./../../../service/localService";
export default function ListUserPage({ arrListUserC }) {
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  const UserUpdate = userLocalAdmin.get();
  console.log("xx", UserUpdate);
  const [userArr, setUserArr] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      const handleRemoveUser = (account) => {
        deleteUser(account)
          .then((result) => {
            message.success("Xóa Thành Công");
            fetchUserList();
            // console.log(result);
          })
          .catch((err) => {
            message.error("Thất bại");
            console.log(err.response.data.content);
          });
      };

      // const hanleUpdateUser = (dataUpdate) => {
      //   putUpdateUser(dataUpdate)
      //     .then((result) => {
      //       message.success("Sửa Thành Công");
      //       console.log(result);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // };

      getUserList()
        .then((result) => {
          let userList = result.data.map((item) => {
            let arrListUserC = {
              taiKhoan: item.taiKhoan,
              matKhau: item.matKhau,
              hoTen: item.hoTen,
              soDT: item.soDT,
              maLoaiNguoiDung: item.maLoaiNguoiDung,
              maNhom: item.maNhom,
              email: item.email,
            };
            return {
              ...item,
              key: item.taiKhoan,
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
                      onClick={() => {
                        window.location.href = `/admin/updateuser/${item.taiKhoan}`;
                      }}
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
          console.log(result);

          setUserArr(userList);
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
        <a href="/admin/adduser" className="text-3xl">
          Thêm Người Dùng Mới
        </a>
      </div>
      <Table columns={userColums} dataSource={userArr} />
    </div>
  );
}
