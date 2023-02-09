import React from "react";
import { Button, Form, Input, message } from "antd";
import { postLogin } from "./../../service/userService";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux_toolkit/userSlice";
import { userLocalService } from "../../service/localService";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/login.json";
export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    postLogin(values)
      .then((result) => {
        console.log(result);
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
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="grid w-full grid-cols-2 ">
      <div>
        <Lottie animationData={groovyWalkAnimation} />
      </div>
      <div className="mt-28">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
