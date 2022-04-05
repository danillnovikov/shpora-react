import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Router = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 87px' }}>
        <div className="site-layout-content">
          <h1 className="title">Router</h1>
          <p className="component_text">
            В React имеется своя система маршрутизации, которая позволяет
            сопоставлять запросы к приложению с определенными компонентами.
            Ключевым звеном в работе маршрутизации является модуль react-router,
            который содержит основной функционал по работе с маршрутизацией.
            Однако если мы собираемся работать в браузере, то нам также надо
            использовать модуль react-router-dom, а также history.
          </p>
          <div className="code">
            <pre>
              <code>{`const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Здесь определены три объекта из модуля react-router-dom.
          </p>
          <p className="component_text">
            {' '}
            <b> Router </b>
            определяет набор маршрутов и, когда к приложению, приходит запрос,
            то Router выполняет сопоставление запроса с маршрутами.И если
            какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается
            для обработки запроса.
          </p>{' '}
          <p className="component_text">
            {' '}
            И также для выбора маршрута определен объект <b>Routes</b> . Он
            содержит набор маршрутов и позволяет выбрать первый попавшийся
            маршрут и его использовать для обработки.
          </p>
          <p className="component_text">
            Каждый маршрут представляет объект <b>Route</b> . Он имеет ряд
            атрибутов. В частности, здесь для маршрута устанавливаются два
            атрибута:
          </p>
          <ul className="component_text">
            <li>
              <b>path</b>: шаблон адреса, с которым будет сопоставляться
              запрошенный адрес URL
            </li>
            <li>
              {' '}
              <b>element</b> - тот компонент, который отвечает за обработку
              запроса по этому маршруту
            </li>
          </ul>
          <p className="component_text">
            Например, первый маршрут выступает в качестве корневого. Он
            сопоставляется с адресом "/" и обрабатывается компонентом Main:
          </p>
          <div className="code">
            <pre>
              <code>{`<Route path="/" element={<Main />} />
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Второй маршрут будет сопоставляться с адресом "/about", а
            обрабатываться он будет компонентом About.
          </p>
          <div className="code">
            <pre>
              <code>{`<Route path="/about" element={<About />} />
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Особо следует выделить третий маршрут:
          </p>
          <div className="code">
            <pre>
              <code>{`<Route path="*" element={<NotFound />} />
`}</code>
            </pre>
          </div>
          <p className="component_text">
            Путь в виде звездочки - "*" указывает, что этот маршрут будет
            сопоставляться со всеми адресами URL, которые не соответствуют
            предыдущим маршрутам. И он будет обрабатываться компонентом
            NotFound. Таким образом мы можем задать обработку при обращении к
            несуществующим ресурсам в приложении.
          </p>
          <p className="component_text">
            С помощью атрибута <b>element</b> объекта Route также можно без
            применения классов динамически определить содержимое компонента,
            который будет обрабатывать маршрут:
          </p>
          <div className="code">
            <pre>
              <code>{`<Router>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={(<h2>Contacts</h2>)} />
        <Route path="*" element={<NotFound />} />
    </Routes>
</Router>
`}</code>
            </pre>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Router;
