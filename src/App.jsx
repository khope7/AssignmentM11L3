/*
Task 1: Sign Up for API Key
Go to this link https://developer.marvel.com/ and sign up for an API key. When you go to your Developer Account you will have a PUBLIC KEY & PRIVATE KEY
The API is very restricted and not only requires your keys but also a hash of your keys. Go to this link https://www.md5hashgenerator.com/ and enter 1 + PRIVATE KEY + PUBLIC KEY to get YOUR HASH (select the MD5 version)


Task 2: Fetch and Display Characters
Create a functional component CharacterList to display a list of Marvel Comics characters.
Use the useEffect hook to fetch character data from the Marvel Comics API endpoint https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOURPUBLICKEY>&hash=<YOURHASH> using Axios.
Display each character's name and thumbnail image in a grid format.
Expected Outcome:
Successfully fetching and displaying a list of Marvel Comics characters from the API.
Each character should be listed with its name and thumbnail image.


Task 3: Implement the Character Detail Feature
Create a functional component CharacterDetail to display detailed information about a selected character.
Implement a click event handler to fetch additional character details asynchronously when a character thumbnail is clicked.
Use Axios to send a GET request to the Marvel Comics API endpoint https://gateway.marvel.com/v1/public/characters/{characterId}?ts=1&apikey=<YOURPUBLICKEY&hash=YOURHASH.
Display the character's name, description, and list of associated comics.
Expected Outcome:
Ability to click on a character thumbnail to view detailed information about the character.
Detailed information should include the character's name, description, and associated comics.


Task 4: Integrating Components and Updating the User Interface
In your main App component, integrate CharacterList and CharacterDetail.
Ensure that the character detail view updates dynamically when a character thumbnail is clicked.
Expected Outcome:
The CharacterDetail component should update and display detailed information about the selected character immediately when a character thumbnail is clicked.
Seamless integration of CharacterList and CharacterDetail in the App component.
*/

// NOTE Unable to do task 1 due to server failure, using Pokemon API instead


import './App.css'
import PokemonList from './components/PokemonAxios'

function App() {
  return (
    <div>
      <PokemonList/>
    </div>
  )
}

export default App