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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis mollitia incidunt placeat saepe reprehenderit.
            Similique rerum repellat, unde vero porro, atque magnam quia fugit
            ad esse nostrum. Nihil, veniam architecto.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default Events;
