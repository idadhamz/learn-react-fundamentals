import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("Dadi");

  useEffect(() => {
    setName("Pertama")
  }, [])

  const onSetName = (e) => {
    const { value } = e.target
    setName(value);
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/classcomp">Class Components</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Halo {name}</h1>
        <input type="text" name="name" value={name} onChange={onSetName} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
