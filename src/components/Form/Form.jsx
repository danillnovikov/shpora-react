import React from 'react';
import { Layout } from 'antd';
import './Form.css';

const { Content } = Layout;

const Form = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Work with Form</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default Form;
