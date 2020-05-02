import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in with Google
        </a>
        <a
          className="App-link"
          href="/api/current_user"
          target="_blank"
          rel="noopener noreferrer"
        >
          Current User
        </a>
        <a
          className="App-link"
          href="/api/logout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Out
        </a>
      </header>
    </div>
  );
}

export default App;
