import React from 'react';
import { Layout } from 'antd';
import './Effect.css';

const { Content } = Layout;

const Effect = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">useEffect</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Effect;
