import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import FirstSet from './components/FirstSet';
import SecondSet from './components/SecondSet';
import ThirdSet from './components/ThirdSet';
import Navbar from './components/Navbar';
import styles from './components/ChakraUI.module.css';

function App() {
  return (
    <div className={styles.body}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='1st' element={<FirstSet />}></Route>
          <Route path='2nd' element={<SecondSet />}></Route>
          <Route path='3rd' element={<ThirdSet />}></Route>
        </Routes>
    </div>
  );
}

export default App;
