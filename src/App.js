import GameContainer from './GameContainer'
import Header from './Header'
import AddGameForm from './AddGameForm';
import NavBar from './NavBar'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'

function App() {
const [gameData, setGameData] = useState([])
const [formInput, setFormInput] = useState('')

const API = 'http://localhost:3000/games'

useEffect(() => {
  fetch(API) 
  .then(response => response.json())
  .then(data => setGameData(data))
  },[])



  return (
    <div className="App" >
      {/* <Switch> */}
        <Header />
        <NavBar />
        <Route  path='/new'>
          <AddGameForm setInput={setFormInput} input={formInput}/>
        </Route> 
        <GameContainer gameData={gameData}/>
      {/* </Switch> */}
    </div>
  );
}

export default App;