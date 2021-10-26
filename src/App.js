import GameContainer from './GameContainer'
import Header from './Header'
import AddGameForm from './AddGameForm';
import NavBar from './NavBar'
import {useEffect, useState} from 'react';

// hello

function App() {
const [gameData, setGameData] = useState([])
const [filterSearch, setFilterSearch] = useState(gameData)

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

const handleSearch = (e) => {
  const filtered = gameData.filter((game) => {
    return game.title.includes(e.target.value)
  })
  setFilterSearch(filtered)
}

  return (
    <div className="App" >
      <Header handleSearch={handleSearch} />
      <NavBar />
      <AddGameForm />
      <GameContainer gameData={filterSearch}/>
    </div>
  );
}

export default App;