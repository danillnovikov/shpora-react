import React from 'react';
import { Layout } from 'antd';
import './Refs.css';

const { Content } = Layout;

const Refs = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Refs</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Refs;
