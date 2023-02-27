import React from "react";
import { useSelector } from "react-redux";
import { userLocalService } from "../../service/localService";
import { Button } from "antd";
export default function UserNav() {
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
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
        <React.Fragment>
          <span>Xin chào bạn {user?.hoTen}</span>
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
          </Button>
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
