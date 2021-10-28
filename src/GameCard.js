import GameDetails from "./GameDetails"
import { useState } from "react"
import {Route} from 'react-router-dom'
import styled from "styled-components"

const GameCard = ({game}) => {

    return (
        
        <CardContainer className='game-card'>
            <div className='game-title'>
            </div>
            <div className='image-card'>
            <a href={game.game_url}>
                <img alt={game.title} src={game.thumbnail}/>
            </a>
            <GameDetails details={game}/>
            </div>
            
        </CardContainer>
        
    )
}


export default GameCard

const CardContainer = styled.div `
    box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
    
    cursor: pointer;

        :hover{
            z-index: .5;
            transform: scale(1.01);
        }
       
    * {
        display:flex;
        // width: %
    }
`