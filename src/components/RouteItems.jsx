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
  { id: 1, path: 'home', element: <Home /> },
  {
    id: 2,
    path: 'components',
    element: <Components />,
  },
  {
    id: 3,
    path: 'props',
    element: <Props />,
  },
  { id: 4, path: 'state', element: <State /> },
  { id: 5, path: 'lifecycle', element: <Lifecycle /> },
  {
    id: 6,
    path: 'events',
    element: <Events />,
  },
  { id: 7, path: 'key', element: <Key /> },
  { id: 8, path: 'refs', element: <Refs /> },
  { id: 9, path: 'async', element: <Async /> },
  { id: 10, path: 'v-dom', element: <VirtualDOM /> },
  { id: 11, path: 'fragment', element: <Fragment /> },
  { id: 12, path: 'memo', element: <Memo /> },
  { id: 13, path: 'useeffect', element: <Effect /> },
  { id: 14, path: 'router', element: <Router /> },
  { id: 15, path: 'context', element: <Context /> },
  { id: 16, path: 'form', element: <Form /> },
  { id: 17, path: '*', element: <Navigate replace to="/home" /> },
];
