import React, { useState } from 'react';
import Axios from 'axios';

const Pokelist = (props) => {
    const [pokelist, setPokelist] = useState([]);
 
    const fetchPokelist = () => {
        Axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000")
            .then(response => setPokelist(response.data.results))
            .catch(err=> console.log(err));
    };

    return (
        <div>
            <button onClick={ fetchPokelist }>Fetch!</button>
            <ul>
                {pokelist.length > 0 && pokelist.map((pokemon, index) => {
                    return (<li key={index}>{pokemon.name}</li>)
                })}
            </ul>
        </div>
    );
    
}
export default Pokelist;