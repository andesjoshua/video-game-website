import GameContainer from './GameContainer'
import Header from './Header'
import NavBar from './NavBar'
import {useEffect, useState} from 'react';

function App() {
const [gameData, setGameData] = useState([])

const API = 'https://free-to-play-games-database.p.rapidapi.com/api/games'


useEffect(() => {
  fetch(API, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "e33f7d1317mshc41b79d9f97eb25p1f7246jsn81ae77998367",
	}
})
.then(response => response.json())
.then(data => setGameData(data))
},[])

  return (
    <div className="App" >
      <Header />
      <GameContainer gameData={gameData}/>
    </div>
  );
}

export default App;