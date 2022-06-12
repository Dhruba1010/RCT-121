import './App.css';
import Counter from './Components/Counter';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App" style={{marginTop:'1rem', marginBottom:'2rem'}}>
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
