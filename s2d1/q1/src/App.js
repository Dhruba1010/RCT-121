import './App.css';
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import 

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='1st' element={<FirstSet}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
