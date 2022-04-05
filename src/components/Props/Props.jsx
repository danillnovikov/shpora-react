import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Props = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Props</h1>
          <p className="component_text">
            Пока что мы только встречали React-элементы, представляющие собой
            DOM-теги:
          </p>
          <div className="code">
            <pre>
              <code>{`const element = <div />;
`}</code>
            </pre>
          </div>

          <p className="component_text">
            Но элементы могут описывать и наши собственные компоненты:
          </p>
          <div className="code">
            <pre>
              <code>{`const element = <Welcome name="Алиса" />;
`}</code>
            </pre>
          </div>

          <p className="component_text">
            Когда React встречает подобный элемент, он собирает все JSX-атрибуты
            и дочерние элементы в один объект и передаёт их нашему компоненту.
            Этот объект называется «пропсы» (props).
          </p>

          <p className="component_text">
            Например, этот компонент выведет «Привет, Алиса» на страницу:
          </p>

          <div className="code">
            <pre>
              <code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
`}</code>
            </pre>
          </div>

          <p className="component_text">
            Давайте разберём, что именно здесь происходит:
          </p>
          <p className="component_text">
            1. Мы передаём React-элемент {`<Welcome name="Алиса" />`} в{' '}
            {`ReactDOM.render()`}.
          </p>
          <p className="component_text">
            2. React вызывает наш компонент Welcome с пропсами{' '}
            {`{ name: 'Алиса' }`}.
          </p>
          <p className="component_text">
            3. Наш компонент Welcome возвращает элемент{' '}
            {`<h1>Привет, Алиса</h1>`} в качестве результата.
          </p>
          <p className="component_text">
            4. React DOM делает минимальные изменения в DOM, чтобы получилось{' '}
            {`<h1>Привет, Алиса</h1>`}.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default Props;
