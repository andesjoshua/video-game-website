import GameCard from './GameCard'

const GameContainer = ({gameData}) => {
    console.log(gameData)

    return (
        <div>
            <h2>Find your free game!</h2>
           <h3>{gameData.map(game => <GameCard key={game.id} game={game}/>)}</h3>
        </div>
    )
}

export default GameContainer