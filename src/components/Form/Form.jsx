import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Form = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Формы</h1>
          <p className="component_text">
            В React HTML-элементы формы ведут себя немного иначе по сравнению с
            DOM-элементами, так как у элементов формы изначально есть внутреннее
            состояние. К примеру, в эту HTML-форму можно ввести имя:
          </p>
          <div className="code">
            <pre>
              <code>{`<form>
  <label>
    Имя:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Отправить" />
</form>`}</code>
            </pre>
          </div>
          <p className="component_text">
            По умолчанию браузер переходит на другую страницу при отправке
            HTML-форм, в том числе и этой. Если вас это устраивает, то не надо
            ничего менять, в React формы работают как обычно. Однако, чаще всего
            форму удобнее обрабатывать с помощью JavaScript-функции, у которой
            есть доступ к введённым данным. Стандартный способ реализации такого
            поведения называется «управляемые компоненты».
          </p>
          <h2 className="subtitle">Управляемые компоненты</h2>
          <p className="component_text">
            В HTML элементы формы, такие как {`<input>, <textarea> и <select>`},
            обычно сами управляют своим состоянием и обновляют его когда
            пользователь вводит данные. В React мутабельное состояние обычно
            содержится в свойстве компонентов state и обновляется только через
            вызов {`setState()`}
          </p>
          <p className="component_text">
            Мы можем скомбинировать оба подхода и сделать состояние
            React-компонента «единственным источником правды». Тогда
            React-компонент будет рендерить форму и контролировать её поведение
            в ответ на пользовательский ввод. Значение элемента формы input в
            этом случае будет контролировать React, а сам элемент будет
            называться «управляемый компонент».
          </p>
          <p className="component_text">
            Допустим, мы хотим, чтобы предыдущий пример показал в модальном окне
            введённое имя, когда мы отправляем форму. Тогда можно написать форму
            в виде управляемого компонента:
          </p>
          <div className="code">
            <pre>
              <code>{`class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }`}</code>
            </pre>
          </div>
          <h2 className="subtitle">Тег textarea</h2>
          <p className="component_text">
            HTML-элемент {`<textarea>`} в качестве текста отображает дочерний
            элемент:
          </p>
          <div className="code">
            <pre>
              <code>{`<textarea>
  Привет! Тут просто немного текста внутри тега textarea
</textarea>`}</code>
            </pre>
          </div>
          <p className="component_text">
            В React {`<textarea>`} использует атрибут value. Таким образом,
            форму с {`<textarea>`} можно написать почти тем же способом, что и
            форму с однострочным {`<input>`}:
          </p>
          <div className="code">
            <pre>
              <code>{`class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Сочинение:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}`}</code>
            </pre>
          </div>
          <h2 className="subtitle">Тег select</h2>
          <p className="component_text">
            В HTML {`<select>`} создаёт выпадающий список. HTML-код в этом
            примере создаёт выпадающий список вкусов:
          </p>
          <div className="code">
            <pre>
              <code>{`<select>
  <option value="grapefruit">Грейпфрут</option>
  <option value="lime">Лайм</option>
  <option selected value="coconut">Кокос</option>
  <option value="mango">Манго</option>
</select>`}</code>
            </pre>
          </div>
          <p className="component_text">
            Пункт списка «Кокос» выбран по умолчанию из-за установленного
            атрибута selected. React вместо этого атрибута использует value в
            корневом теге select. В управляемом компоненте так удобнее, потому
            что обновлять значение нужно только в одном месте (state). Пример:
          </p>
          <div className="code">
            <pre>
              <code>{`class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Ваш любимый вкус: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Form;
