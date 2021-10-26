import GameDetails from "./GameDetails"
import { useState } from "react"
import {Route} from 'react-router-dom'

const GameCard = ({game}) => {
    const [detailsVisible, setDetailsVisible] = useState(false)

    
    const linkToDetails = () => {
        <link to='./details'></link>
    }

    return (
        
        <div className='game-card'>
            <div className='game-title'>
            <h3 >{game.title}</h3>
            </div>
            <div className='image-card'>
            <img onClick={linkToDetails} alt={game.title} src={game.thumbnail}/>
            </div>
            
        </div>
        
    )
}


export default GameCard