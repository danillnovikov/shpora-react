import React from 'react';
import { Layout } from 'antd';
import './Refs.css';

const { Content } = Layout;

const Refs = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">
            <a
              href="https://ru.reactjs.org/docs/refs-and-the-dom.html"
              className="color"
            >
              Refs
            </a>{' '}
          </h1>
          <p className="component_text">
            Рефы дают возможность получить доступ к DOM-узлам или
            React-элементам, созданным в рендер-методе.
          </p>
          <p className="component_text">
            В обычном потоке данных React родительские компоненты могут
            взаимодействовать с дочерними только через пропсы. Чтобы
            модифицировать потомка, вы должны заново отрендерить его с новыми
            пропсами. Тем не менее, могут возникать ситуации, когда вам
            требуется императивно изменить дочерний элемент, обойдя обычный
            поток данных. Подлежащий изменениям дочерний элемент может быть как
            React-компонентом, так и DOM-элементом. React предоставляет лазейку
            для обоих случаев.
          </p>
          <h2 className="subtitle">Когда использовать рефы</h2>
          <p className="component_text">
            Ситуации, в которых использование рефов является оправданным:
          </p>
          <ul className="component_text">
            <li>
              Управление фокусом, выделение текста или воспроизведение медиа.
            </li>
            <li>Императивный вызов анимаций.</li>
            <li>Интеграция со сторонними DOM-библиотеками.</li>
          </ul>
          <p className="component_text">
            Избегайте использования рефов в ситуациях, когда задачу можно решить
            декларативным способом.
          </p>
          <h2 className="subtitle">Не злоупотребляйте рефами</h2>
          <p className="component_text">
            Возможно, с первого взгляда вам показалось, что рефы применяются,
            когда нужно решить какую-то задачу в вашем приложении «во что бы то
            ни стало». Если у вас сложилось такое впечатление, сделайте паузу и
            обдумайте, где должно храниться конкретное состояние в иерархии
            компонентов. Часто становится очевидно, что правильным местом для
            хранения состояния является верхний уровень в иерархии.
          </p>
          <h2 className="subtitle">Создание рефов</h2>
          <p className="component_text">
            Рефы создаются с помощью {`React.createRef()`} и прикрепляются к
            React-элементам через ref атрибут. Обычно рефы присваиваются
            свойству экземпляра класса в конструкторе, чтобы на них можно было
            ссылаться из любой части компонента.
          </p>
          <div className="code">
            <pre>
              <code>{`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
`}</code>
            </pre>
          </div>
          <h2 className="subtitle">Доступ к рефам</h2>
          <p className="component_text">
            Когда реф передаётся элементу в методе render, ссылка на данный узел
            доступна через свойство рефа current.
          </p>
          <div className="code">
            <pre>
              <code>{`const node = this.myRef.current;
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Значение рефа отличается в зависимости от типа узла:
          </p>
          <ul className="component_text">
            <li>
              Когда атрибут ref используется с HTML-элементом, свойство current
              созданного рефа в конструкторе с помощью {`React.createRef()`}
              получает соответствующий DOM-элемент.
            </li>
            <li>
              Когда атрибут ref используется с классовым компонентом, свойство
              current объекта-рефа получает экземпляр смонтированного
              компонента.
            </li>
            <li>
              <span>
                Нельзя использовать ref атрибут с функциональными компонентами
              </span>
              , потому что для них не создаётся экземпляров.
            </li>
          </ul>
        </div>
      </Content>
    </Layout>
  );
};

export default Refs;
