import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Key = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Key</h1>
          <p className="component_text">
            Ключи помогают React определять, какие элементы были изменены,
            добавлены или удалены. Их необходимо указывать, чтобы React мог
            сопоставлять элементы массива с течением времени:
          </p>
          <div className="code">
            <pre>
              <code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}</code>
            </pre>
          </div>
          <p className="component_text">
            Лучший способ выбрать ключ — это использовать строку, которая будет
            явно отличать элемент списка от его соседей. Чаще всего вы будете
            использовать ID из ваших данных как ключи:
          </p>
          <div className="code">
            <pre>
              <code>{`const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);`}</code>
            </pre>
          </div>
          <p className="component_text">
            Когда у вас нет заданных ID для списка, то в крайнем случае можно
            использовать индекс элемента как ключ:
          </p>
          <div className="code">
            <pre>
              <code>{`const todoItems = todos.map((todo, index) =>
  // Делайте так, только если у элементов массива нет заданного ID
  <li key={index}>
    {todo.text}
  </li>
);`}</code>
            </pre>
          </div>
          <p className="component_text">
            Мы не рекомендуем использовать индексы как ключи, если порядок
            элементов может поменяться. Это негативно скажется на
            производительности и может вызвать проблемы с состоянием компонента.
            Почитайте статью Робина Покорни (Robin Pokorny), которая объясняет,
            почему индексы-ключи приводят к проблемам. Если вы опустите ключ для
            элемента в списке, то React по умолчанию будет использовать индексы
            как ключи.
          </p>
          <h2 className="subtitle">
            Ключи должны быть уникальными среди соседних элементов
          </h2>
          <p className="component_text">
            Ключи внутри массива должны быть уникальными только среди своих
            соседних элементов. Им не нужно быть уникальными глобально. Можно
            использовать один и тот же ключ в двух разных массивах.
          </p>
          <div className="code">
            <pre>
              <code>{`function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
  {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Key;
