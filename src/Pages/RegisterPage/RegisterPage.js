import React from "react";
import { postRegister } from "../../service/userService";
import { useDispatch } from "react-redux";
import { userLocalService } from "../../service/localService";
import { Button, Form, Input, message, Select } from "antd";
import { setUserInfo } from "../../redux_toolkit/userSlice";
import { useNavigate } from "react-router-dom";
import { store_toolkit } from "./../../index";
import { setLoadingOff } from "./../../redux_toolkit/loadingSlice";
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

export default function RegisterPage() {
  store_toolkit.dispatch(setLoadingOff());
  const [form] = Form.useForm();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    postRegister(values)
      .then((result) => {
        message.success("ĐK Thành Công");
        dispatch(setUserInfo(result.data));
        userLocalService.set(result.data);
        navigate("/login");
      })
      .catch((err) => {
        message.warning("ĐK That Bai");
        // console.log(err);
      });
    // console.log("Value ", values);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
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
              addonBefore={prefixSelector}
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
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="dashed" htmlType="submit">
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
