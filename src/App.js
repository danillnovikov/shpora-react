import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { RouteItems } from './components/RouteItems';

function App() {
  return (
    <>
      <Navbar routes={RouteItems} />
      <Routes>
        {RouteItems.map((item) => {
          return (
            <Route key={item.id} path={item.path} element={item.element} />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
