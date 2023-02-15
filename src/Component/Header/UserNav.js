import React from "react";
import { useSelector } from "react-redux";
import { userLocalService } from "../../service/localService";
import { Avatar, Button, Dropdown, Menu } from "antd";
export default function UserNav() {
  const [showButtons, setShowButtons] = React.useState(false);
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  console.log("User:", user);
  const handleLogout = () => {
    //xoa du lieu
    userLocalService.remove();
    window.location.href = "/";
    // window.location.reload()
  };
  const renderContent = () => {
    if (user) {
      //da dang nhap
      return (
        <>
          <span>Xin chào bạn {user?.hoTen}</span>
          <Dropdown
            trigger={["hover"]}
            visible={showButtons}
            onVisibleChange={(visible) => setShowButtons(visible)}
            overlay={
              <Menu>
                <Menu.Item>
                  <Button
                    onClick={handleLogout}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    type="primary"
                  >
                    Đăng Xuất
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    onClick={() => {
                      window.location.href = "/capnhat";
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    type="primary"
                  >
                    Cập Nhật Thông Tin
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Avatar size={64} src={require("./avatar.jpg")} />
          </Dropdown>
          {/* <span>{user?.hoTen}</span>
          <button
            onClick={handleLogout}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Dang Xuat
          </button>
          <a href="/capnhat">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
              Cập Nhật Thông Tin
            </button>
          </a> */}
        </>
      );
    } else {
      return (
        <div>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => {
              window.location.href = "/register";
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mx-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Đăng Ký
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div>{renderContent()}</div>
    </>
  );
}
