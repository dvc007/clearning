import { Tag } from "antd";

export const userColums = [
  {
    title: "Họ Tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Tài Khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mật Khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "soDt",
    key: "soDt",
  },
  {
    title: "Loại Người Dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      if (text === "GV") {
        return (
          <>
            <Tag className="text-red-500">{text}</Tag>
          </>
        );
      } else {
        return (
          <>
            <Tag className="text-blue-500">{text}</Tag>
          </>
        );
      }
    },
  },
  {
    title: "Hành Động",
    dataIndex: "hanhDong",
    key: "hanhDong",
  },
];
