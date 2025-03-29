// Tasks 1-4
// Importing Axios, react, bootstrap and App.css
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import '../App.css'

// Creating PokemonList arrow function and setting use states
const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonImage, setPokemonImage] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState([])


// Creating useEffect for api fetch mounting
    useEffect(() => {

// Setting arrays for api fetch data retrieval
        const pokemonArray = []
        const pokemonDetailArray = []

// Creating asyncronous fetch data function with try catch and finally error blocks for error handling
        const fetchData = async () => {
          try {
// Tasks 1-2: Getting Axios data and slicing to show for top 6 pokemon
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon')
            let data_results = response.data.results.slice(0,6)

// Setting pokemonData useState
            setPokemonData(data_results)

// Creating for loops to retrieve images and detail for each pokemon and appending assigned array
            for (let i=0; i < data_results.length; i ++ ){
              let response_2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data_results[i].name}`)
              let pokemon2 = data_results[i]
              pokemon2["image"] = response_2.data.sprites.front_default

              pokemonArray.push(pokemon2["image"])
            }

            for (let i=0; i < data_results.length; i ++ ){
              let response_3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
              let data_results_detail = response_3.data.base_experience


              pokemonDetailArray.push(data_results_detail)
            }

            setPokemonImage(pokemonArray)
            setPokemonDetail(pokemonDetailArray)

          } catch (e) {
            console.log("Error:", e)
          } finally{
            console.log("")
          }
        }

// Running fetch on page load
        fetchData();
      }, []);


// Returning pokemon info in grid format using bootstrap layout methods
      return (
        <Container>
          <div id="pokemon-data" class="display-flex" className="pokemon-list">
              <h3 >Pokemon</h3>
              <ul class="row row-cols-1 row-cols-md-3 g-4 justify-content-around">
                
{/* Task 3: Using map function to show each pokemon with onClick event handler to display pokemon detailed information via console */}
                {pokemonData.map((pokemon, index) => (
                    <li class="m-4" key={index} onClick={() => console.log(`Base Experience for ${pokemon.name}: ${pokemonDetail[index]}!`) }>
                      {index + 1}. <img src={pokemonImage[index]} alt="png" />  <br></br>Pokemon: <br></br> {pokemon.name}
                    </li>
                  ))}
              </ul>
          </div>
        </Container>
      )
    }

// Task4: exporting PokemonList with Pokemon Details to App.jsx 
export default PokemonList;