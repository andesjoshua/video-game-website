import GameCard from './GameCard'

const GameContainer = ({gameData}) => {
    return (
        <div>
           <h2>Games {gameData.map(game => <GameCard game={game}/>)}</h2>
        </div>
    )
}

export default GameContainer