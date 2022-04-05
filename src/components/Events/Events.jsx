import React from 'react';
import { Layout } from 'antd';
// import './Events.css';

const { Content } = Layout;

const Events = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Обработка событий</h1>
          <p className="component_text">
            Обработка событий в React-элементах очень похожа на обработку
            событий в DOM-элементах. Но есть несколько синтаксических отличий:
          </p>
          <ul className="component_text">
            <li>
              События в React именуются в стиле camelCase вместо нижнего
              регистра.
            </li>
            <li>
              С JSX вы передаёте функцию как обработчик события вместо строки.
            </li>
          </ul>
          <p className="component_text">Например, в HTML:</p>
          <div className="code">
            <pre>
              <code>{`<button onclick="activateLasers()">
  Активировать лазеры
</button>`}</code>
            </pre>
          </div>
          <p className="component_text">В React немного иначе:</p>
          <div className="code">
            <pre>
              <code>{`<button onClick={activateLasers}>
  Активировать лазеры
</button>`}</code>
            </pre>
          </div>
          <p className="component_text">
            Ещё одно отличие — в React нельзя предотвратить обработчик события
            по умолчанию, вернув false. Нужно явно вызвать preventDefault.
            Например, в обычном HTML для отмены отправки формы (действие по
            умолчанию) можно написать:
          </p>
          <div className="code">
            <pre>
              <code>{`<form onsubmit="console.log('Отправлена форма.'); return false">
  <button type="submit">Отправить</button>
</form>`}</code>
            </pre>
          </div>
          <p className="component_text">В React это будет выглядеть так:</p>
          <div className="code">
            <pre>
              <code>{`function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
}`}</code>
            </pre>
          </div>
          <p className="component_text">
            В приведённом выше коде e — это синтетическое событие. React
            определяет синтетические события в соответствии{' '}
            <a href="https://www.w3.org/TR/DOM-Level-3-Events/">
              со спецификацией W3C
            </a>{' '}
            {` `}, поэтому не волнуйтесь о кроссбраузерности. События React
            работают не совсем как нативные. Изучите руководство о
            SyntheticEvent, чтобы узнать о них больше.
          </p>
          <p className="component_text">
            При использовании React обычно не нужно вызывать addEventListener,
            чтобы добавить обработчики в DOM-элемент после его создания. Вместо
            этого добавьте обработчик сразу после того, как элемент
            отрендерился.
          </p>
          <p className="component_text">
            В компоненте, определённом с помощью ES6-класса, в качестве
            обработчика события обычно выступает один из методов класса.
            Например, этот компонент Toggle рендерит кнопку, которая позволяет
            пользователю переключать состояния между «Включено» и «Выключено»:
          </p>
          <div className="code">
            <pre>
              <code>{`class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Events;
