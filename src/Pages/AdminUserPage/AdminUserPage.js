import React, { useEffect, useState } from "react";
import { getUserList } from "./../../service/amindService";
import { userColums } from "./utils";
import { Table, message } from "antd";
import withAuth from "./../../HOC/withAuth";

function AdminUserPage() {
  const [userArr, setUserArr] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      // const handleRemoveUser = (account) => {
      //     deleteUser(account)
      //         .then((result) => {
      //             message.success('Xóa thành công')
      //             fetchUserList()
      //             console.log(result);
      //         }).catch((err) => {
      //             message.error('Thất bại')
      //             console.log(err.response.data.content);
      //         });
      // }

      getUserList()
        .then((result) => {
          console.log(result);

          let userList = result.data.map((item) => {
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
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Xóa
                    </button>
                  </div>

                  {/* <Button
                    type="primary"
                    danger
                    //   onClick={() => {
                    //     handleRemoveUser(item.taiKhoan);
                    //   }}
                  >
                    Xóa
                  </Button>
                  <Button type="dashed">Sửa</Button> */}
                </div>
              ),
            };
          });
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
      <Table columns={userColums} dataSource={userArr} />
    </div>
  );
}

export default withAuth(AdminUserPage);
