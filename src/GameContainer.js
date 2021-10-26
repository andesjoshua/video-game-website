import GameCard from './GameCard'
import './App.css'
import { NavLink } from 'react-router-dom'



const GameContainer = ({gameData}) => {
    return (
        <div>
            <NavLink to='/games/nav'>nav</NavLink>
            <h2 style={{textAlign: 'center'}}>Find your free game!</h2>
           <h3 className="cardStyle">{gameData.map(game => <GameCard key={game.id} game={game}/>)}</h3>
        </div>
    )
}

export default GameContainer