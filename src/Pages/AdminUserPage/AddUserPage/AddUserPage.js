import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import { postAddUser } from "./../../../service/admindService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../../redux_toolkit/userSlice";
import { userLocalService } from "../../../service/localService";
import { setLoadingOff } from "./../../../redux_toolkit/loadingSlice";
import { store_toolkit } from "./../../../index";

const { Option } = Select;

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
export default function AddUserPage() {
  store_toolkit.dispatch(setLoadingOff());

  const [form] = Form.useForm();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("values", values);
    postAddUser(values)
      .then((result) => {
        message.success("ĐK Thành Công");
        dispatch(setUserInfo(result.data));
        userLocalService.set(result.data);
        navigate("/login");
      })
      .catch((err) => {
        message.warning(err.response.data);
        console.log(err);
      });
  };
  return (
    <div>
      <Form
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
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
