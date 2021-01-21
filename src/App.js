import logo from './logo.svg';
import './App.css';

function App() {
  // const sum = (a, b) => a + b
  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Hello, World</h3>
        <p>result: {sum(3, 6)}</p>

        <button onClick={() => alert('สวัสดีครับ')}>Click</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
