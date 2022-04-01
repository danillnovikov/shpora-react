import React from 'react';
import { Layout } from 'antd';
import './Context.css';

const { Content } = Layout;

const Context = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Context</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Context;
