import React, { FC } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import StoreState from '../../models/store';
import { Row, Col } from 'antd';

// interface FormValues {
//   remember: boolean;
//   userName: string;
//   password: string;
// }
const initValues = () => {
  return {
    remember: true,
    userName: '',
    password: '',
  };
};

const Login: FC = () => {
  // const dispatch = useDispatch();
  const authenticateReducer = useSelector(
    (state: StoreState) => state.user,
  );
  console.log(authenticateReducer);

  return (
    <div
      className="flex justify-center flex-col items-center align-middle h-full"
      style={{
        // margin: '0',
        // position: 'relative',
        paddingTop: '5%',
        // left: '50%',
        // transform: 'translateY(-50%)',
      }}
    >
      <div className="h-32 flex justify-center items-center ">
        {/* <img
          src={Logo}
          alt="Logo"
          className="object-contain w-full h-full h-16"
        /> */}
      </div>
      <Row>
      <Col span={10}></Col>
      <Col span={6}>
      <Card className="w-3/5 lg:w-1/3 p-4 shadow-xl mt-4">
      <Form initialValues={initValues()}>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: 'Tên đăng nhập không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="text-base mb-2 mr-1" />}
            placeholder="Tên đăng nhập"
            type="string"
            autoComplete={'off'}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Mật khẩu không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="text-base mb-2 mr-1" />}
            type="password"
            placeholder="Mật khẩu"
            autoComplete={'off'}
          />
        </Form.Item>
        <Form.Item className="flex text-center m-0">
          <Button
            type="primary"
            htmlType="submit"
            className="shadow-xl"
            loading={false}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Card>
      </Col>
      <Col span={10}></Col>
    </Row>
    
      {/* <LoginForm /> */}
    </div>
  );
};

export default Login;
