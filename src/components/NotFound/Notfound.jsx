import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Notfound = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 style={{ textAlign: 'center' }}>Страница не найдена!</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Notfound;
