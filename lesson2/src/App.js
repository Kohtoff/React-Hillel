import React, { useState, useEffect } from "react";
import "./App.css";
import Tree from './components/Tree/Tree';
import NewsPage from "./components/NewsPage/NewsPage";

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
      {/* <aside id="aside">
        {treeData ? <Tree data={treeData}/> : undefined}
      </aside> */}
      <NewsPage></NewsPage>
    </div>
  );
}

export default App;
