import React from 'react';
import { Layout } from 'antd';
import './Events.css';

const { Content } = Layout;

const Events = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">События</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Events;
