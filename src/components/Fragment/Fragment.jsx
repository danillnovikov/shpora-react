import React from 'react';
import { Layout } from 'antd';
import './Fragment.css';

const { Content } = Layout;

const Fragment = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">React.Fragment</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Fragment;
