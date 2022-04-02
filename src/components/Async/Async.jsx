import React from 'react';
import { Layout } from 'antd';
import './Async.css';

const { Content } = Layout;

const Props = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Асинхронные запросы</h1>
          <h2 className="subtitle">Как выполнить AJAX-запрос к серверу?</h2>
          <p className="component_text">
            Вы можете использовать встроенный в браузер метод window.fetch или
            любую AJAX-библиотеку, например Axios или jQuery AJAX.
          </p>
          <h2 className="subtitle">
            Где в жизненном цикле компонента лучше делать запрос?
          </h2>
          <p className="component_text">
            Вы можете сделать AJAX-запрос в componentDidMount. Когда вы получите
            данные, вызовите setState, чтобы передать их компоненту.
          </p>
          <h2 className="subtitle">
            Пример: Устанавливаем состояние из AJAX-запроса
          </h2>
          <p className="component_text">
            Компонент ниже показывает, как в componentDidMount задать внутреннее
            состояние из результата AJAX-запроса.
          </p>
          <p className="component_text">
            Допустим, наш API возвращает следующий JSON-объект:
          </p>
          <div className="code">
            <pre>
              <code>{`{
  "items": [
    { "id": 1, "name": "Яблоки",  "price": "$2" },
    { "id": 2, "name": "Персики", "price": "$5" }
  ] 
}
`}</code>
            </pre>
          </div>
          <div className="code">
            <pre>
              <code>{`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Вот эквивалент с{' '}
            <a href="https://reactjs.org/docs/hooks-intro.html">хуками</a>:
          </p>
          <div className="code">
            <pre>
              <code>{`function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Props;
