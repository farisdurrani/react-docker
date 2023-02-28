import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const aaa = async () => {
    const res = await axios.get("http://localhost:4000/");
    console.log(res);
  };

  useEffect(() => {
    aaa();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
