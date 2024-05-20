import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LoginForm = () => {
 const onFinish = (values) => {
    console.log('Success:', values);
 };

 const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
 };

 return (
    <div className="login-form">
      <Title level={2} className="login-logo">TaskMate</Title>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        style={{ width: '300px' }}
      >
        <Form.Item
          label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight:'500' }}>Email</Text>}
          name="email"
          rules={[{ required: true, message: 'Please input your email.' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ marginBottom: '12px' }}
        >
          <Input size="large"/>
        </Form.Item>

        <Form.Item
          label={<Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '14px', fontWeight:'500' }}>Password</Text>}
          name="password"
          rules={[{ required: true, message: 'Please input your password.' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ marginBottom: '12px' }}
        >
          <Input.Password  size="large"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox><span style={{fontFamily:'"Sora", san-serif', fontSize:'14px', fontWeight:'500'}}>Remember me</span></Checkbox>
          <br />
          <Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '11px', fontWeight:'500', color:'#00000090', marginLeft:'20px' }}>Save my login details for next time</Text>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size='large'>
          <span style={{fontFamily:'"Sora", san-serif', fontSize:'14px'}}> Sign In</span>
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="center"><Text style={{ fontFamily: '"Sora", sans-serif', fontSize: '11px', fontWeight:'400', color:'#000000'}}>OR</Text></Divider>
      <div style={{ textAlign: 'center', fontSize:'14px' }}>
        Don't have an account? <a href="#" style={{textDecoration:'none', color:'#2B4FEB'}}>Sign Up</a>
      </div>
      <Button type="primary" icon={<GoogleOutlined />} style={{ width: '100%', marginTop: '20px' }} size='large'>
      <span style={{fontFamily:'"Sora", san-serif', fontSize:'14px'}}>Sign in with Google</span>
      </Button>
    </div>
 );
};

export default LoginForm;
