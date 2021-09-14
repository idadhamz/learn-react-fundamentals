import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';

function App() {

  const [name, setName] = useState("Dadi");

  useEffect(() => {
    setName(`Component App (Function Component)`)
  }, [])

  const onSetName = (e) => {
    const { value } = e.target
    setName(value);
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Halo {name}</h1>
        <input type="text" name="name" onChange={onSetName} className="px-4 py-2 my-5 text-black bg-white rounded-xl" />
      </header>
    </div>
  );
}

export default App;
