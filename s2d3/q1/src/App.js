import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route  />
      </Routes>
    </div>
  );
}

export default App;
