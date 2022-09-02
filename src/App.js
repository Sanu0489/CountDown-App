import logo from './logo.svg';
import './App.css';
import Timer from './Timer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Timer maxRange={120}/>
      </header>
    </div>
  );
}

export default App;
