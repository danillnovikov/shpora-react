import React from 'react';
import { Layout } from 'antd';
import './State.css';

const { Content } = Layout;

const State = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">State</h1>
          <h2 className="subtitle">Добавим внутреннее состояние в класс</h2>
          <p className="component_text">
            Переместим date из пропсов в состояние в три этапа:
          </p>
          <p className="component_text">
            1. Заменим {`this.props.date`} на {`this.state.date`} в методе{' '}
            {`render()`}:
          </p>
          <div className="code">
            <pre>
              <code>{`class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Добавим конструктор класса, в котором укажем начальное состояние в
            переменной {`this.state`}:
          </p>
          <div className="code">
            <pre>
              <code>{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Обратите внимание, что мы передаём props базовому (родительскому)
            конструктору:
          </p>
          <div className="code">
            <pre>
              <code>{` constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Классовые компоненты всегда должны вызывать базовый конструктор с
            аргументом props.
          </p>

          <p className="component_text">
            3. Удалим проп date из элемента {`<Clock />`}:
          </p>
          <div className="code">
            <pre>
              <code>{` ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Результат выглядит следующим образом:
          </p>
          <div className="code">
            <pre>
              <code>{` class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default State;
