import React from "react";
import { useSelector } from "react-redux";
import { userLocalService } from "../../service/localService";
import { Button } from "antd";
export default function UserNav() {
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  // const handleLogout = () => {
  //   //xoa du lieu
  //   userLocalService.remove();
  //   window.location.href = "/";
  //   // window.location.reload()
  // };
  const renderContent = () => {
    if (user) {
      //da dang nhap
      return (
        <React.Fragment>
          {/* <span>Xin chào bạn {user?.hoTen}</span>
          <Button
            onClick={handleLogout}
            className="header-tailwin"
            type="primary"
          >
            Đăng Xuất
          </Button>

          <Button
            onClick={() => {
              window.location.href = "/capnhat";
            }}
            className="header-tailwin"
            type="primary"
          >
            Cập Nhật Thông Tin
          </Button> */}

          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            class="w-10 h-10 rounded-full cursor-pointer"
            src={require("./avatar.jpg")}
            alt="User dropdown"
          />

          <div
            id="userDropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user?.hoTen}</div>
              <div class="font-medium truncate">{user?.email}</div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <a
                  href="/capnhat"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Setting
                </a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="/#"
                onClick={() => {
                  userLocalService.remove();
                  window.location.href = "/";
                }}
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="header-tailwin"
            type="primary"
          >
            Đăng Nhập
          </Button>

          <Button
            onClick={() => {
              window.location.href = "/register";
            }}
            className="header-tailwin"
            type="primary"
          >
            Đăng Ký
          </Button>
        </React.Fragment>
      );
    }
  };

  return <div>{renderContent()}</div>;
}
