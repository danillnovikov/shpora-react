import React from 'react';
import { Layout } from 'antd';
import './Lifecycle.css';

const { Content } = Layout;

const Lifecycle = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">
            <a
              href="https://ru.reactjs.org/docs/react-component.html#unsafe_componentwillmount"
              className="color"
            >
              {' '}
              Жизненные циклы
            </a>
          </h1>
          <p className="component_text">
            Каждый компонент имеет несколько «методов жизненного цикла».
            Переопределение такого метода позволяет выполнять код на конкретном
            этапе этого процесса.
          </p>
          <h3 className="sub_title">Монтирование</h3>
          <p className="component_text">
            При создании экземпляра компонента и его вставке в DOM, следующие
            методы вызываются в установленном порядке:
          </p>
          <ul className="component_text">
            <li>{`constructor()`}</li>
            <li>{`static getDerivedStateFromProps()`}</li>
            <li>{`render()`}</li>
            <li>{`componentDidMount()`}</li>
            <li>{`UNSAFE_componentWillMount()`}</li>
          </ul>

          <p className="component_text">
            Метод {`UNSAFE_componentWillMount()`} устарел. Не используйте его в
            новом коде.
          </p>
          <h3 className="sub_title">Обновление</h3>
          <p className="component_text">
            Обновление происходит при изменении пропсов или состояния. Следующие
            методы вызываются в установленном порядке при повторном рендере
            компонента:
          </p>
          <ul className="component_text">
            <li>{`static getDerivedStateFromProps()`}</li>
            <li>{`static getDerivedStateFromProps()`}</li>
            <li>{`render()`}</li>
            <li>{`getSnapshotBeforeUpdate()`}</li>
            <li>{`componentDidUpdate()`}</li>
            <li>{`UNSAFE_componentWillUpdate()`}</li>
            <li>{`UNSAFE_componentWillReceiveProps()`}</li>
          </ul>
          <p className="component_text">
            Методы {`UNSAFE_componentWillUpdate()`} и{` `}
            {`UNSAFE_componentWillReceiveProps()`} устарели. Не используйте их в
            новом коде.
          </p>
          <h3 className="sub_title">Размонтирование</h3>
          <p className="component_text">
            Этот метод вызывается при удалении компонента из DOM:
          </p>
          <ul className="component_text">
            <li>{`componentWillUnmount()`}</li>
          </ul>
          <h3 className="sub_title">Обработка ошибок</h3>
          <p className="component_text">
            Следующие методы вызываются, если произошла ошибка в процессе
            рендеринга, методе жизненного цикла или конструкторе любого
            дочернего компонента.
          </p>
          <ul className="component_text">
            <li>{`static getDerivedStateFromError()`}</li>
            <li>{`componentDidCatch()`}</li>
          </ul>
        </div>
      </Content>
    </Layout>
  );
};

export default Lifecycle;
