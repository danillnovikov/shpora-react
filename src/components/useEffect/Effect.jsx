import React from 'react';
import { Layout } from 'antd';
import './Effect.css';

const { Content } = Layout;

const Effect = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">useEffect</h1>
          <p className="component_text">
            Хук эффекта даёт вам возможность выполнять побочные эффекты в
            функциональном компоненте:
          </p>
          <div className="code">
            <pre>
              <code>{` import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = 'Вы нажали ${'count'} раз';
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Хук useEffect представляет собой совокупность методов
            componentDidMount, componentDidUpdate, и componentWillUnmount.
          </p>
          <p className="component_text">
            Существует два распространённых вида побочных эффектов в компонентах
            React: компоненты, которые требуют и не требуют сброса. Давайте
            рассмотрим оба примера более детально.
          </p>
          <h2 className="subtitle">Эффекты без сброса</h2>
          <p className="component_text">
            Иногда мы хотим выполнить дополнительный код после того, как React
            обновил DOM. Сетевые запросы, изменения DOM вручную, логирование —
            всё это примеры эффектов, которые не требуют сброса. После того, как
            мы запустили их, можно сразу забыть о них, ведь больше никаких
            дополнительных действий не требуется. Давайте сравним, как классы и
            хуки позволяют нам реализовывать побочные эффекты.
          </p>
          <h2 className="subtitle">Пример с использованием классов</h2>
          <p className="component_text">
            В классовых React-компонентах метод render сам по себе не должен
            вызывать никаких побочных эффектов. Он не подходит для этих целей,
            так как в основном мы хотим выполнить наши эффекты после того, как
            React обновил DOM.
          </p>
          <p className="component_text">
            Вот почему в классах React мы размещаем побочные эффекты внутрь
            componentDidMount и componentDidUpdate. Возвращаясь к нашему
            примеру, здесь представлен счётчик, реализованный с помощью
            классового React-компонента. Он обновляет заголовок документа сразу
            же после того, как React вносит изменения в DOM:
          </p>
          <div className="code">
            <pre>
              <code>{` class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = 'Вы нажали ${'this.state.count'} раз';
  }
  componentDidUpdate() {
    document.title = 'Вы нажали ${'this.state.count'} раз';
  }

  render() {
    return (
      <div>
        <p>Вы нажали {this.state.count} раз</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Обратите внимание, что нам приходится дублировать наш код между
            этими классовыми методами жизненного цикла.
          </p>
          <p className="component_text">
            Это всё потому, что во многих случаях, мы хотим выполнять одни и те
            же побочные эффекты вне зависимости от того, был ли компонент только
            что смонтирован или обновлён. Мы хотим чтобы они выполнялись после
            каждого рендера — но у классовых React-компонентов нет таких
            встроенных методов. Мы могли бы вынести этот метод отдельно, но нам
            бы всё равно пришлось бы вызывать его в двух местах.
          </p>
          <h2 className="subtitle">Пример с использованием хуков</h2>
          <p className="component_text">
            Мы уже рассматривали этот пример немного ранее, но давайте разберём
            его более подробно:
          </p>
          <div className="code">
            <pre>
              <code>{` import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'Вы нажали ${`count`} раз';
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}s
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Что же делает useEffect? Используя этот хук, вы говорите React
            сделать что-то после рендера. React запомнит функцию (то есть
            «эффект»), которую вы передали и вызовет её после того, как внесёт
            все изменения в DOM. В этом эффекте мы устанавливаем заголовок
            документа, но мы также можем выполнить запрос данных или вызвать
            какой-нибудь императивный API.
          </p>
          <p className="component_text">
            Почему же мы вызываем useEffect непосредственно внутри компонента?
            Это даёт нам доступ к переменной состояния count (или любым другим
            пропсам) прямиком из эффекта. Нам не нужен специальный API для
            доступа к этой переменной — она уже находится у нас в области
            видимости функции. Хуки используют JavaScript-замыкания, и таким
            образом, им не нужен специальный API для React, поскольку сам
            JavaScript уже имеет готовое решение для этой задачи.
          </p>
          <p className="component_text">
            Почему же мы вызываем useEffect непосредственно внутри компонента?
            Это даёт нам доступ к переменной состояния count (или любым другим
            пропсам) прямиком из эффекта. Нам не нужен специальный API для
            доступа к этой переменной — она уже находится у нас в области
            видимости функции. Хуки используют JavaScript-замыкания, и таким
            образом, им не нужен специальный API для React, поскольку сам
            JavaScript уже имеет готовое решение для этой задачи.
          </p>
          <h2 className="subtitle">Эффекты со сбросом</h2>
          <p className="component_text">
            Ранее мы рассмотрели побочные эффекты, которые не требуют сброса.
            Однако, есть случаи, когда сброс всё же необходим. Например, нам
            может потребоваться установить подписку на какой-нибудь внешний
            источник данных. В этом случае очень важно выполнять сброс, чтобы не
            случилось утечек памяти! Давайте сравним, как мы можем это
            реализовать с помощью классов и хуков.
          </p>
          <h2 className="subtitle">Пример с использованием классов</h2>
          <p className="component_text">
            В React-классе, вы, как правило, оформили бы подписку в
            componentDidMount и отменили бы её в componentWillUnmount. Например,
            предположим, что у нас есть некий модуль ChatAPI, с помощью которого
            мы можем подписаться на статус друга в сети. Вот как бы мы
            подписались и отобразили статус, используя класс:
          </p>
          <div className="code">
            <pre>
              <code>{` class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Загрузка...';
    }
    return this.state.isOnline ? 'В сети' : 'Не в сети';
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Обратите внимание, что componentDidMount и componentWillUnmount по
            сути содержат идентичный код. Методы жизненного цикла вынуждают нас
            разбивать эту логику, хоть и фактически код обоих методов относится
            к одному и тому же эффекту.
          </p>
          <h2 className="subtitle">Пример с использованием хуков</h2>
          <p className="component_text">
            Давайте рассмотрим, как этот компонент будет выглядеть, если
            написать его с помощью хуков.
          </p>
          <p className="component_text">
            Вы должно быть подумали, что нам потребуется отдельный эффект для
            выполнения сброса. Так как код для оформления и отмены подписки
            тесно связан с useEffect, мы решили объединить их. Если ваш эффект
            возвращает функцию, React выполнит её только тогда, когда наступит
            время сбросить эффект.
          </p>
          <div className="code">
            <pre>
              <code>{` import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Указываем, как сбросить этот эффект:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Загрузка...';
  }
  return isOnline ? 'В сети' : 'Не в сети';
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Зачем мы вернули функцию из нашего эффекта? Это необязательный
            механизм сброса эффектов. Каждый эффект может возвратить функцию,
            которая сбросит его. Это даёт нам возможность объединить вместе
            логику оформления и отмены подписки. Они, всё-таки, часть одного и
            того же эффекта!
          </p>
          <p className="component_text">
            Когда именно React будет сбрасывать эффект? React будет сбрасывать
            эффект перед тем, как компонент размонтируется. Однако, как мы уже
            знаем, эффекты выполняются не один раз, а при каждом рендере. Вот
            почему React также сбрасывает эффект из предыдущего рендера, перед
            тем, как запустить следующий. Мы рассмотрим почему это позволяет
            избежать багов и как отказаться от этой логики, если это вызывает
            проблемы с производительностью далее.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default Effect;
