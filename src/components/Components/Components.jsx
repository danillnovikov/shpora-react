import React from 'react';
import { Layout } from 'antd';
import './Components.css';

const { Content } = Layout;

const Components = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Компоненты</h1>
          <div className="component_text">
            Компоненты позволяют разбить интерфейс на независимые части, про
            которые легко думать в отдельности. Их можно складывать вместе и
            использовать несколько раз. На этой странице мы ознакомимся с самой
            идеей компонентов — детальное описание API находится{' '}
            <a href="https://ru.reactjs.org/docs/react-component.html">здесь</a>
            .
          </div>
          <h2 className="subtitle">Функциональные и классовые компоненты</h2>
          <p className="component_text">
            Проще всего объявить React-компонент как функцию:
          </p>
          <div className="code">
            <pre>
              <code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}`}</code>
            </pre>
          </div>
          <p className="component_text">
            Эта функция — компонент, потому что она получает данные в одном
            объекте («пропсы») в качестве параметра и возвращает React-элемент.
            Мы будем называть такие компоненты «функциональными», так как они
            буквально являются функциями.
          </p>
          <p className="component_text">
            Ещё компоненты можно определять как{' '}
            <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes">
              классы ES6:
            </a>
          </p>
          <div className="code">
            <pre>
              <code>{`class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Components;
