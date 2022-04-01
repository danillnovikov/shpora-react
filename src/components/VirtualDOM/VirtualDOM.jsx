import React from 'react';
import { Layout } from 'antd';
import './VirtualDOM.css';

const { Content } = Layout;

const VirtualDOM = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Виртуальный дом</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default VirtualDOM;
