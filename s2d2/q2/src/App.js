import { useContext } from 'react';
import './App.css';
import LoginDetails from './components/LoginDetails';
import Navbar from './components/Navbar';
import { AuthContext } from './contexts/AuthContextProvider';

function App() {
  const {isAuth} = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />
      {isAuth ? (<LoginDetails />) : (<div></div>)}
    </div>
  );
}

export default App;
