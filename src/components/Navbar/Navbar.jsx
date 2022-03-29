import React from 'react';
import { MenuItems } from '../MenuItems';
import logo from './logo.png';
import { Layout, Menu } from 'antd';
import './Navbar.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <img src={logo} alt="logo" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          {MenuItems.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={item.url}>{item.title}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
