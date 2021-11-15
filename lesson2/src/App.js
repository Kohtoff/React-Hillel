import React, { useState, useEffect } from "react";
import "./App.css";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import Tree from './components/Tree/Tree';

function App() {
  const [treeData, setNavData] = useState(null);

  useEffect(() => {
    fetch("directories.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((fetchedData) => {
        setNavData(fetchedData);
      });
  }, []);

  return (
    <div className="App">
      <aside id="aside">
        {treeData ? <Tree data={treeData}/> : undefined}
      </aside>
      <main id="main">
        
        <h1 className="main-title">Latest News</h1>
        <ArticlesList dataPath="./news.json" />
      </main>
    </div>
  );
}

export default App;
