import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ShipsPage from "./components/ShipsPage/ShipsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <ShipsPage />
      </main>
    </div>
  );
}

export default App;
