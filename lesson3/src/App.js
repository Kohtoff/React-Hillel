import React, { useState, useEffect } from "react";
import "./App.css";
import Tree from './components/Tree/Tree';
import NewsPage from "./components/NewsPage/NewsPage";

function App() {

  return (
    <div className="App">
      <NewsPage></NewsPage>
    </div>
  );
}

export default App;
