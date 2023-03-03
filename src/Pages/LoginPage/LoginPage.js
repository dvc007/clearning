import React from "react";
import { Button, Form, Input, message, Checkbox } from "antd";
import { postLogin } from "./../../service/userService";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux_toolkit/userSlice";
import { userLocalService } from "../../service/localService";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/login.json";
import { store_toolkit } from "./../../index";
import { setLoadingOff } from "./../../redux_toolkit/loadingSlice";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  store_toolkit.dispatch(setLoadingOff());

  const onFinish = (values) => {
    postLogin(values)
      .then((result) => {
        // console.log(result);
        message.success("success login");
        dispatch(setUserInfo(result.data));
        userLocalService.set(result.data);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-around bg-slate-100 max-[640px]:bg-slate-300 max-[640px]:inline">
      <div className="w-1/3 max-[640px]:mx-auto ">
        <Lottie animationData={groovyWalkAnimation} />
      </div>
      <div className="2xl:mt-20 xl:mt-20 lg:mt-10 md:mt-5 max-[640px]:mx-14 max-[640px]:mt-2">
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 40 }}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên người dùng của bạn!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên tài khoản"
            />
          </Form.Item>
          <Form.Item
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu của bạn!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ tài khoản</Checkbox>
            </Form.Item>
            {/* <a className="login-form-forgot" href="/">
            Đã quên mật khẩu?
          </a> */}
          </Form.Item>

          <Form.Item>
            <Button
              // type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>{" "}
            <Button className="">
              <span>
                <a href="/register">Tạo tài khoản mới</a>
              </span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
