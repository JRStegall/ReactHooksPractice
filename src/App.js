import { useState } from "react";
// import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Jerome");
  const changeName = () => {
    setName("Jeremy");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>My name is {name}</p>
        <button onClick={changeName}> Click me </button>
      </header>
    </div>
  );
}

export default App;
