import React from 'react';
import { Layout } from 'antd';
import './Lifecycle.css';

const { Content } = Layout;

const Lifecycle = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Жизненные циклы</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Lifecycle;
