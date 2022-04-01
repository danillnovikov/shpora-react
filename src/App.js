import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Components from './components/Components/Components';
import Props from './components/Props/Props';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import State from './components/State/State';
import Lifecycle from './components/Lifecycle/Lifecycle';
import Events from './components/Events/Events';
import Key from './components/Key/Key';
import Refs from './components/Refs/Refs';
import Async from './components/Async/Async';
import VirtualDOM from './components/VirtualDOM/VirtualDOM';
import Fragment from './components/Fragment/Fragment';
import Memo from './components/Memo/Memo';
import Effect from './components/useEffect/Effect';
import Router from './components/Router/Router';
import Context from './components/Context/Context';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/events" element={<Events />} />
        <Route path="/key" element={<Key />} />
        <Route path="/refs" element={<Refs />} />
        <Route path="/async" element={<Async />} />
        <Route path="/v-dom" element={<VirtualDOM />} />
        <Route path="/fragment" element={<Fragment />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/useeffect" element={<Effect />} />
        <Route path="/router" element={<Router />} />
        <Route path="/context" element={<Context />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
