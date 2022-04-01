import React from 'react';
import { Layout } from 'antd';
import './Memo.css';

const { Content } = Layout;

const Memo = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">React.Memo</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Memo;
