import React from "react";
import { putUser } from "./../../service/userService";
import { Button, Form, Input, message, Select, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
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
export default function UpdateUser() {
  //form tabs
  //form update info
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
  let navigate = useNavigate();
  let user = useSelector((state) => {
    return state.userSlice.user;
  });
  // console.log("UserACC:", user.taiKhoan);
  const onFinish = (values) => {
    putUser(values)
      .then((result) => {
        message.success("Đã cập nhật thành công");
        console.log(result);
        navigate("/login");
      })

      .catch((err) => {
        message.warning("Thất Bại");
        console.log(err);
      });
    console.log("Value ", values);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <Form
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
            <Input disabled />
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
            <Input disabled />
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
            <Input disabled />
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
              disabled
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
            <Select disabled placeholder="Chọn mã nhóm của bạn">
              <Option disabled value="GP01">
                GP01
              </Option>
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
            <Select disabled placeholder="Chọn mã người dùng của bạn">
              <Option value="HV">HV</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="dashed" htmlType="submit">
              Cập Nhật
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div>
        <Tabs
          defaultActiveKey="2"
          items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);
            return {
              label: (
                <span>
                  <Icon />
                  Tab {id}
                </span>
              ),
              key: id,
              children: `Tab ${id}`,
            };
          })}
        />
      </div>
    </div>
  );
}
