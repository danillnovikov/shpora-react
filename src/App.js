import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Components from './components/Components/Components';
import Props from './components/Props/Props';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
