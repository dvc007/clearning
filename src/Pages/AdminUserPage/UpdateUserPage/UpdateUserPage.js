import React from "react";
import { putUpdateUser } from "./../../../service/amindService";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, message, Select } from "antd";
import { useSelector } from "react-redux";
import { userLocalAdmin } from "../../../service/localService";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const { Option } = Select;

export default function UpdateUserPage() {
  const [form] = Form.useForm();
  const UserUpdate = userLocalAdmin.get();
  console.log(UserUpdate);
  let params = useParams();
  let navigate = useNavigate();
  let user = useSelector((state) => {
    return state.userSlice.user;
  });

  let arrList = {
    taiKhoan: user.taiKhoan,
    matKhau: user.matKhau,
    hoTen: user.hoTen,
    soDT: user.soDT,
    maLoaiNguoiDung: user.maLoaiNguoiDung,
    maNhom: user.maNhom,
    email: user.email,
  };
  console.log("IP", arrList);
  const onFinish = (values) => {
    putUpdateUser(values)
      .then((result) => {
        message.success("Đã cập nhật thành công");
        console.log(result);
        navigate("/admin");
      })

      .catch((err) => {
        message.warning("Thất Bại");
        console.log(err);
      });
    console.log("Value ");
  };
  console.log("parm", params);

  return (
    <div>
      <div className="flex justify-center items-center">
        <Form
          // fields={[
          //   {
          //     name: ["taiKhoan"],
          //     value: params[0]?.taiKhoan,
          //   },
          //   {
          //     name: ["matKhau"],
          //     value: params[0]?.matKhau,
          //   },
          //   {
          //     name: ["hoTen"],
          //     value: params[0]?.hoTen,
          //   },
          //   {
          //     name: ["soDT"],
          //     value: params[0]?.soDt,
          //   },
          //   {
          //     name: ["maLoaiNguoiDung"],
          //     value: params[0]?.maLoaiNguoiDung,
          //   },
          //   {
          //     name: ["maNhom"],
          //     value: params[0]?.maNhom,
          //   },
          //   {
          //     name: ["email"],
          //     value: params[0]?.email,
          //   },
          // ]}
          // initialValues={{
          //   remember: true,
          // }}
          initialValues={user}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="taiKhoan"
            label="Tai Khoan"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Sai cấu trúc Email",
              },
              {
                required: true,
                message: "Vui lòng nhập E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="matKhau"
            label="Mật Khẩu"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="hoTen"
            label="Họ và tên"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="soDT"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="maNhom"
            label="Mã Nhóm"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn mã nhóm!",
              },
            ]}
          >
            <Select placeholder="Chọn mã nhóm của bạn">
              <Option value="GP01">GP01</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="maLoaiNguoiDung"
            label="Mã Loại Người Dùng "
            rules={[
              {
                required: true,
                message: "Vui lòng chọn mã nhóm!",
              },
            ]}
          >
            <Select placeholder="Chọn mã người dùng của bạn">
              <Option value="HV">HV</Option>
              <Option value="GV">GV</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="dashed" htmlType="submit">
              Cập Nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
