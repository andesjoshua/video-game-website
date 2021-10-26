import GameCard from './GameCard'
import './App.css'


const GameContainer = ({gameData}) => {

    return (
        <div>
            <h2>Find your free game!</h2>
           <h3 className="cardStyle">{gameData.map(game => <GameCard key={game.id} game={game}/>)}</h3>
        </div>
    )
}

export default GameContainer