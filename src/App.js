import GameContainer from './GameContainer'
import Header from './Header'
import NavBar from './NavBar'
import {useEffect, useState} from 'react';

function App() {
const [gameData, setGameData] = useState()

const API = 'https://api.rawg.io/api/platforms?key=34a81b8193a846b5aba89c9356f750ec'

useEffect(() => {
  async function getData(){
    const request = fetch(API)
    const response = await request;
    const data = await response.json()
    setGameData(data)
  }
  getData()
},[]) 
   if(gameData === undefined) return null

  return (
    <div className="App" >
      <Header />
      <GameContainer gameData={gameData}/>
    </div>
  );
}

export default App;
