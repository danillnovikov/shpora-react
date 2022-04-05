import Home from './Home/Home';
import Components from './Components/Components';
import Props from './Props/Props';
import State from './State/State';
import Lifecycle from './Lifecycle/Lifecycle';
import Events from './Events/Events';
import Key from './Key/Key';
import Refs from './Refs/Refs';
import Async from './Async/Async';
import VirtualDOM from './VirtualDOM/VirtualDOM';
import Fragment from './Fragment/Fragment';
import Memo from './Memo/Memo';
import Effect from './useEffect/Effect';
import Router from './Router/Router';
import Context from './Context/Context';
import Form from './Form/Form';
// import Notfound from './NotFound/Notfound';
import { Navigate } from 'react-router-dom';

export const RouteItems = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'components',
    element: <Components />,
  },
  {
    path: 'props',
    element: <Props />,
  },
  {
    path: 'state',
    element: <State />,
  },
  {
    path: 'lifecycle',
    element: <Lifecycle />,
  },
  {
    path: 'events',
    element: <Events />,
  },
  {
    path: 'key',
    element: <Key />,
  },
  {
    path: 'refs',
    element: <Refs />,
  },
  {
    path: 'async',
    element: <Async />,
  },
  {
    path: 'v-dom',
    element: <VirtualDOM />,
  },
  {
    path: 'v-dom',
    element: <VirtualDOM />,
  },
  {
    path: 'fragment',
    element: <Fragment />,
  },
  {
    path: 'memo',
    element: <Memo />,
  },
  {
    path: 'useeffect',
    element: <Effect />,
  },
  {
    path: 'router',
    element: <Router />,
  },
  {
    path: 'context',
    element: <Context />,
  },
  {
    path: 'form',
    element: <Form />,
  },
  {
    path: '*',
    element: <Navigate replace to="/home" />,
  },
];
