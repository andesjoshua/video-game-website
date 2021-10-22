import {useEffect, useState} from 'react';

function App() {

const [gameData, setGameData] = useState([])

  useEffect(() => {
    fetch('https://api.rawg.io/api/platforms?key=34a81b8193a846b5aba89c9356f750ec')
    .then(r => r.json())
    .then(data => console.log(data))
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
