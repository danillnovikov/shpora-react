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
          <div className="code">
            <pre>
              <code>{`const MyComponent = React.memo(function MyComponent(props) {
  /* рендер с использованием пропсов */
});
`}</code>
            </pre>
          </div>
          <p className="component_text">
            React.memo — это компонент высшего порядка.
          </p>
          <p className="component_text">
            Если ваш компонент всегда рендерит одно и то же при неменяющихся
            пропсах, вы можете обернуть его в вызов React.memo для повышения
            производительности в некоторых случаях, мемоизируя тем самым
            результат. Это значит, что React будет использовать результат
            последнего рендера, избегая повторного рендеринга.
          </p>
          <p className="component_text">
            Если ваш компонент всегда рендерит одно и то же при неменяющихся
            пропсах, вы можете обернуть его в вызов React.memo для повышения
            производительности в некоторых случаях, мемоизируя тем самым
            результат. Это значит, что React будет использовать результат
            последнего рендера, избегая повторного рендеринга.
          </p>
          <p className="component_text">
            По умолчанию он поверхностно сравнивает вложенные объекты в объекте
            props. Если вы хотите контролировать сравнение, вы можете передать
            свою функцию сравнения в качестве второго аргумента.
          </p>
          <div className="code">
            <pre>
              <code>{` function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Этот метод предназначен только для оптимизации производительности.
            Не полагайтесь на него, чтобы «предотвратить» рендер, так как это
            может привести к ошибкам.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default Memo;
