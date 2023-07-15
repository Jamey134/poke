// import logo from './logo.svg';
import './App.css';
import Post from './components/Post';

function App() {

  const getPokemon = () => {

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  }




  return (
    <div className="App">
      <h1>Catch That PokeMon!!!</h1>
      <br></br>
      <button>Fetch</button>
    </div>
  );
}

export default App;
