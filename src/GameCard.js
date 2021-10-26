import GameDetails from "./GameDetails"
import { useState } from "react"
import {Route} from 'react-router-dom'
const GameCard = ({game}) => {
    const [detailsVisible, setDetailsVisible] = useState(false)

    
    const displayDetails = () => {
        setDetailsVisible(!detailsVisible)
    }

    return (
        <div>
            <h3>{game.title}</h3>
            <img onClick={displayDetails} alt={game.title} src={game.thumbnail}/>
            {detailsVisible ?
            <GameDetails details={game}/>
            : null}
        </div>
    )
}


export default GameCard