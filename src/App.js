import GameContainer from './GameContainer'
import Header from './Header'
import AddGameForm from './AddGameForm';
import NavBar from './NavBar'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'

// hello

function App() {
const [gameData, setGameData] = useState([])
const [formInput, setFormInput] = useState('')
const [filterSearch, setFilterSearch] = useState(gameData)

const API = 'http://localhost:3001/games'

useEffect(() => {
  fetch(API) 
  .then(response => response.json())
  .then(data => setGameData(data))
  },[])

useEffect(() => {
setFilterSearch(gameData)
},[gameData])

const handleSearch = (e) => {
  const filtered = gameData.filter((game) => {
    return game.title.includes(e.target.value)
  })
  setFilterSearch(filtered)
}

  return (
    <div className="App" >
      {/* <Switch> */}
        <NavBar gameData={gameData} setGameData={setGameData}/>
        <Route  path='/new'>
        <AddGameForm setInput={setFormInput} input={formInput}/>
        </Route> 
      {/* </Switch> */}
      <Header handleSearch={handleSearch} />
      <GameContainer gameData={filterSearch}/>
    </div>
  );
}

export default App;