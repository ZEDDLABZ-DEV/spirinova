import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { startlogin } from "../../Controllers/AuthController";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => dispatch(startlogin(e));

  return (
    <div className="login">
      <div className="login-container">
        <Form layout="vertical" onFinish={(e) => handleLogin(e)}>
          <Form.Item
            label="Username"
            name="email"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input placeholder="Enter your username..." />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password..." />
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export { Login };
