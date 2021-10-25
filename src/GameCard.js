import GameDetails from "./GameDetails"
import { useState } from "react"

const GameCard = ({game}) => {
    const [detailsVisible, setDetailsVisible] = useState(false)

    const displayDetails = () => {
        setDetailsVisible(!detailsVisible)
    }
    return (
        <div>
            <h3>{game.title}</h3>
            <img onClick={() => displayDetails()} alt={game.title} src={game.thumbnail} style={{width: 200}}></img>
            {detailsVisible ? <GameDetails details={game}/> : null}
        </div>
    )
}

export default GameCard