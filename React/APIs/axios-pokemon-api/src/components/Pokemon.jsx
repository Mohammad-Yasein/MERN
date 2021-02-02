import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const clickHandler = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => setPokemon(response.data.results))
      .catch(error => console.log(error));
  };

  return (
    <>
      <button onClick={clickHandler} className="btn btn-outline-dark mb-5 px-4 py-2">
        Fetch Pokemon!
      </button>
      <ul>
        {pokemon.length > 0 && pokemon.map((poke, index) => <li key={index}>{poke.name}</li>)}
      </ul>
    </>
  );
};

export default Pokemon;
