import GameCard from './GameCard'
import './App.css'
import styled from 'styled-components'



const GameContainer = ({gameData}) => {
    return (
        <StyleContainer>
            <h2 style={{textAlign: 'center'}}>Find your free game!</h2>
           <h3 className="cardStyle">{gameData.map(game => <GameCard key={game.id} game={game}/>)}</h3>
        </StyleContainer>
    )
}

export default GameContainer

const StyleContainer = styled.div `
    h2{
        font-size: 30px;
        margin-bottom: auto;
        margin-top: auto;
    }
`