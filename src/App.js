// import logo from './logo.svg';
import './App.css';
import Post from './components/Post';

function App() {

  const getPokemon = () => {

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then (res => {
        // do something
        console.log(res);
      })
      .catch (err => {
        console.log(err);
      })
  }




  return (
    <div className="App">
      <h1>Catch That PokeMon!!!</h1>
      <br></br>
      <button onClick={getPokemon}>Fetch</button>
    </div>
  );
}

export default App;
