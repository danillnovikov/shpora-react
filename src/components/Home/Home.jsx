import React from 'react';
import react from './react.jpeg';
import './Home.css';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="home_title">React Shpora</h1>
          <img src={react} alt={'react'} />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
