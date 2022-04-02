import React from 'react';
import { Layout } from 'antd';
import './Context.css';

const { Content } = Layout;

const Context = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Context</h1>
          <p className="component_text">
            Контекст позволяет передавать данные через дерево компонентов без
            необходимости передавать пропсы на промежуточных уровнях.
          </p>
          <p className="component_text">
            Контекст разработан для передачи данных, которые можно назвать
            «глобальными» для всего дерева React-компонентов (например, текущий
            аутентифицированный пользователь, UI-тема или выбранный язык).
          </p>
          <h2 className="subtitle">React.createContext</h2>
          <div className="code">
            <pre>
              <code>{`const MyContext = React.createContext(defaultValue);`}</code>
            </pre>
          </div>
          <p className="component_text">
            Создаёт объект Context. Когда React рендерит компонент, который
            подписан на этот объект, React получит текущее значение контекста из
            ближайшего подходящего Provider выше в дереве компонентов.
          </p>
          <p className="component_text">
            Аргумент defaultValue используется только в том случае, если для
            компонента нет подходящего Provider выше в дереве. Значение по
            умолчанию может быть полезно для тестирования компонентов в изоляции
            без необходимости оборачивать их. Обратите внимание: если передать
            undefined как значение Provider, компоненты, использующие этот
            контекст, не будут использовать defaultValue.
          </p>
          <h2 className="subtitle">Context.Provider</h2>
          <div className="code">
            <pre>
              <code>{`<MyContext.Provider value={/* некоторое значение */}>`}</code>
            </pre>
          </div>
          <p className="component_text">
            Каждый объект Context используется вместе с Provider компонентом,
            который позволяет дочерним компонентам, использующим этот контекст,
            подписаться на его изменения.
          </p>
          <p className="component_text">
            Компонент Provider принимает проп value, который будет передан во
            все компоненты, использующие этот контекст и являющиеся потомками
            этого компонента Provider. Один Provider может быть связан с
            несколькими компонентами, потребляющими контекст. Так же компоненты
            Provider могут быть вложены друг в друга, переопределяя значение
            контекста глубже в дереве.
          </p>
          <p className="component_text">
            Все потребители, которые являются потомками Provider, будут повторно
            рендериться, как только проп value у Provider изменится. Потребитель
            (включая .contextType и useContext) перерендерится при изменении
            контекста, даже если его родитель, не использующий данный контекст,
            блокирует повторные рендеры с помощью shouldComponentUpdate.
          </p>
          <h2 className="subtitle">Class.contextType</h2>
          <div className="code">
            <pre>
              <code>{`class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* отрендерить что-то, используя значение MyContext */
  }
}
MyClass.contextType = MyContext;`}</code>
            </pre>
          </div>
          <p className="component_text">
            В свойство класса contextType может быть назначен объект контекста,
            созданный с помощью React.createContext(). С помощью этого свойства
            вы можете использовать ближайшее и актуальное значение указанного
            контекста при помощи this.context. В этом случае вы получаете доступ
            к контексту, как во всех методах жизненного цикла, так и в
            рендер-методе.
          </p>
          <h2 className="subtitle">Context.Consumer</h2>
          <div className="code">
            <pre>
              <code>{`<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}</code>
            </pre>
          </div>
          <p className="component_text">
            Consumer — это React-компонент, который подписывается на изменения
            контекста. В свою очередь, использование этого компонента позволяет
            вам подписаться на контекст в функциональном компоненте.
          </p>
          <p className="component_text">
            Consumer принимает функцию в качестве дочернего компонента. Эта
            функция принимает текущее значение контекста и возвращает
            React-компонент. Передаваемый аргумент value будет равен ближайшему
            (вверх по дереву) значению этого контекста, а именно пропу value
            компонента Provider. Если такого компонента Provider не существует,
            аргумент value будет равен значению defaultValue, которое было
            передано в createContext().
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default Context;
