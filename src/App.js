import GameContainer from './GameContainer'
import Header from './Header'
import AddGameForm from './AddGameForm';
import NavBar from './NavBar'
import {useEffect, useState} from 'react';

// hello

function App() {
const [gameData, setGameData] = useState([])

const API = 'http://localhost:3001/games'

useEffect(() => {
    fetch(API) 
  .then(response => response.json())
  .then(data => setGameData(data))
  },[])

// useEffect(() => {
//   fetch(API, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
// 		"x-rapidapi-key": "e33f7d1317mshc41b79d9f97eb25p1f7246jsn81ae77998367",
// 	}
// })
// .then(response => response.json())
// .then(data => setGameData(data))
// },[])

  return (
    <div className="App" >
      <Header />
      <AddGameForm />
      <GameContainer gameData={gameData}/>
    </div>
  );
}

export default App;