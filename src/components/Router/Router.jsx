import React from 'react';
import { Layout } from 'antd';
import './Router.css';

const { Content } = Layout;

const Router = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Router</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Router;
