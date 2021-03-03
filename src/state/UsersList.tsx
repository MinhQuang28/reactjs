import { useState } from 'react';
import { Button, DatePicker, Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserList: React.FC = () => {
  const [name, setName] = useState('');
  const [collapsed, setSollapsed] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);

  const [user, setUser] = useState<{name: string , age: number}| undefined>();
  // console.log(name);

  const onClick = () => {
    const fondUsers =  users.find((users)=>{
      return users.name === name;
    })
    setUser(fondUsers);
  };
  const Increment =() => {
    setNum((current)=> current+1);

  }
  const OnChangeInput = (event :React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event);

  }

  console.log(num);
  return (
    <Layout className="layout" style={{ minHeight: '100vh', position: 'fixed', width: '100%' }}>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <button onClick={Increment}>increment</button>
      <div>{user?.name}</div>
      <div>{num}</div>
      <input  onChange={(event) => OnChangeInput(event)} />
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  
  );
};

export default UserList;
