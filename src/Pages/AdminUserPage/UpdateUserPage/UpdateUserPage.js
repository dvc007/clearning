import React from "react";
import { putUpdateUser } from "./../../../service/admindService";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, message, Select } from "antd";
// import { useSelector } from "react-redux";
import { userLocalAdmin } from "../../../service/localService";
import { store_toolkit } from "./../../../index";
import { setLoadingOff } from "./../../../redux_toolkit/loadingSlice";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/update.json";
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

export default function UpdateUserPage(props) {
  store_toolkit.dispatch(setLoadingOff());
  const [form] = Form.useForm();
  const UserUpdate = userLocalAdmin.get();
  console.log(UserUpdate);
  let params = useParams();
  let navigate = useNavigate();

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

  return (
    <div>
      <div className="flex justify-around bg-slate-100 max-[640px]:bg-slate-300 max-[640px]:inline">
        <div className="w-2/5">
          <Lottie animationData={groovyWalkAnimation} />x
        </div>
        <div className="flex items-center mr-60 ">
          <Form
            initialValues={params}
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
              label="Mã Người Dùng"
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
    </div>
  );
}
