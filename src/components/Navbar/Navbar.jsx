import React from 'react';
import { MenuItems } from '../MenuItems';
import logo from './logo.png';
import { Layout, Menu } from 'antd';
import './Navbar.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = ({ routes }) => {
  const [, pathname] = window.location.pathname.split('/');
  const currentRoute = routes.find((route) => route.path === pathname);
  console.log(currentRoute);

  return (
    <Layout className="layout">
      <Header>
        <img src={logo} alt="logo" className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[currentRoute?.id]}
        >
          {MenuItems.map((item) => (
            <Menu.Item key={item.id}>
              <Link to={item.url}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
