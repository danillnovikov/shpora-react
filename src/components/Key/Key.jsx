import React from 'react';
import { Layout } from 'antd';
import './Key.css';

const { Content } = Layout;

const Key = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Key</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Key;
