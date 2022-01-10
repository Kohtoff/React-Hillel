import React, {useState} from 'react';

import './App.css';
import Header from './Components/Header/Header';
import NewsPage from './Components/NewsPage/NewsPage';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="App">
      <Header></Header>
      <main id='main'>
        <SearchBar value={searchValue} handlerOnChange={(e) => setSearchValue(e.target.value.toLowerCase())}/>
        <NewsPage searchValue={searchValue}/>
      </main>
    </div>
  );
}

export default App;
