import React, {useState} from 'react'

const Post = () => {
    const [pokeList, setPokeList] = useState([])
    const fetchData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPokeList(response.results)
            }
            )
    }
    return (
        <div>
            <h1>List of Pokemon</h1>
            <button onClick={fetchData}>CatchEmAll</button>
            {pokeList.map((pokemon, index) => {
                return (
                    <div key={index}>{pokemon.name}</div>
                )
            }
            )}

        </div>
    )
}

export default Post