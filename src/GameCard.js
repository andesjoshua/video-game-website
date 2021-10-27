import GameDetails from "./GameDetails"
import { useState } from "react"
import {Route} from 'react-router-dom'
import styled from "styled-components"

const GameCard = ({game}) => {
    const [detailsVisible, setDetailsVisible] = useState(false)

    
    const linkToDetails = () => {
        <link to='./details'></link>
    }

    return (
        
        <CardContainer className='game-card'>
            <div className='game-title'>
            <h3 >{game.title}</h3>
            </div>
            <div className='image-card'>
            <img onClick={linkToDetails} alt={game.title} src={game.thumbnail}/>
            </div>
            
        </CardContainer>
        
    )
}


export default GameCard

const CardContainer = styled.div `
    h3 {
        /* font-size: 20px; */
        /* margin-top: auto; */
    }
`