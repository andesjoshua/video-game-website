import GameContainer from './GameContainer'
import Header from './Header'
import AddGameForm from './AddGameForm';
import NavBar from './NavBar'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

// hello

function App() {
const [gameData, setGameData] = useState([])
const [filterSearch, setFilterSearch] = useState(gameData)
const hisotry = useHistory();

const API = 'http://localhost:3000/games'

useEffect(() => {
  fetch(API) 
  .then(response => response.json())
  .then(data => setGameData(data))
  },[])

useEffect(() => {
setFilterSearch(gameData)
},[gameData])

const addGame = (newGame) => {
  setGameData([newGame, ...gameData])
}

const handleSearch = (e) => {
  const filtered = gameData.filter((game) => {
    return game.title.includes(e.target.value)
  })
  setFilterSearch(filtered)
}

  return (
    <div className="App" >
      {/* <Switch> */}

        <Route exact path='/games/nav'>
        <NavBar gameData={gameData} setGameData={setGameData}/>
        </Route>

          <Route exact path='/new'>
            <AddGameForm addGame={addGame}/>
          </Route>

        <Header handleSearch={handleSearch} />

        <Route exact path='/games'>
          <GameContainer gameData={filterSearch}/>
        </Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;