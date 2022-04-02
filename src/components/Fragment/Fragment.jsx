import React from 'react';
import { Layout } from 'antd';
import './Fragment.css';

const { Content } = Layout;

const Fragment = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">React.Fragment</h1>
          <p className="component_text">
            Возврат нескольких элементов из компонента является распространённой
            практикой в React. Фрагменты позволяют формировать список дочерних
            элементов, не создавая лишних узлов в DOM.
          </p>
          <div className="code">
            <pre>
              <code>{`render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}s
`}</code>
            </pre>
          </div>
          <h2 className="subtitle">Мотивация</h2>
          <p className="component_text">
            Возврат списка дочерних элементов из компонента — распространённая
            практика. Рассмотрим пример на React:
          </p>
          <div className="code">
            <pre>
              <code>{`class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            {`<Columns /> `} должен вернуть несколько элементов {`<td>`}, чтобы
            HTML получился валидным. Если использовать div как родительский
            элемент внутри метода {`render()`} компонента {`<Columns />`}, то
            HTML окажется невалидным.
          </p>
          <div className="code">
            <pre>
              <code>{`class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Привет</td>
        <td>Мир</td>
      </div>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Результатом вывода {`<Table />`} будет:
          </p>
          <div className="code">
            <pre>
              <code>{`<table>
  <tr>
    <div>
      <td>Привет</td>
      <td>Мир</td>
    </div>
  </tr>
</table>
`}</code>
            </pre>
          </div>
          <p className="component_text">Фрагменты решают эту проблему.</p>
          <h2 className="subtitle">Использование</h2>
          <div className="code">
            <pre>
              <code>{`class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Привет</td>
        <td>Мир</td>
      </React.Fragment>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Результатом будет правильный вывод {`<Table />`}:
          </p>
          <div className="code">
            <pre>
              <code>{`<table>
  <tr>
    <td>Привет</td>
    <td>Мир</td>
  </tr>
</table>

`}</code>
            </pre>
          </div>
          <h2 className="subtitle">Сокращённая запись</h2>
          <p className="component_text">
            Существует сокращённая запись объявления фрагментов. Она выглядит
            как пустые теги:
          </p>
          <div className="code">
            <pre>
              <code>{`class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Привет</td>
        <td>Мир</td>
      </>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Можно использовать {`<></>`} так же, как используется любой другой
            элемент. Однако такая запись не поддерживает ключи или атрибуты.
          </p>
          <h2 className="subtitle">Фрагменты с ключами</h2>
          <p className="component_text">
            Фрагменты, объявленные с помощью {`<React.Fragment>`}, могут иметь
            ключи. Например, их можно использовать при создании списка
            определений, преобразовав коллекцию в массив фрагментов.
          </p>
          <div className="code">
            <pre>
              <code>{`function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            key — это единственный атрибут, допустимый у Fragment. В будущем мы
            планируем добавить поддержку дополнительных атрибутов, например,
            обработчиков событий.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default Fragment;
