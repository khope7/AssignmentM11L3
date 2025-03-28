import React, { useEffect, useState} from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [data, setData] = useState([])


  
    useEffect(() => {
        const fetchData = async () =>{
            const {data: response} = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setData(response);
        }

        fetchData();
      }, []);

      

      const pokemon1 = {id: 1, pokemonName: data.results[0].name}
      const pokemon2 = {id: 2, pokemonName: data.results[1].name}
      const pokemon3 = {id: 3, pokemonName: data.results[2].name}
      const pokemon4 = {id: 4, pokemonName: data.results[3].name}
      const pokemon5 = {id: 5, pokemonName: data.results[4].name}
      const pokemon6 = {id: 6, pokemonName: data.results[5].name}

      const pokemonArray = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6] 



      return (
        <div className="pokemon-list">
            <h3>Pokemon</h3>
            <ul>
              {pokemonArray.map(pokemon => (
                  <li>
                    Pokemon ID: {pokemon.id}, Pokemon: {pokemon.pokemonName}
                  </li>
                ))}
            </ul>
        </div>
      )
    }
    
    export default PokemonList;