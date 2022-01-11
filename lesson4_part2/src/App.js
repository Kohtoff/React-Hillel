import './App.css';
import Header from './Components/Header/Header';
import ShipsPage from './Components/PlanetsPage/PlanetsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main id='main'>
        <ShipsPage/>  
      </main>
    </div>
  );
}

export default App;
