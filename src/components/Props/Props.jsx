import React from 'react';
import { Layout } from 'antd';
import './Props.css';

const { Content } = Layout;

const Props = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Пропсы</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Props;
