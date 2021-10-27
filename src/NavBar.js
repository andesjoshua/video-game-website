import {games} from './db.json'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'



const NavBar = ({setGameData}) => {

        const handleClick = (genre) => {
        const updatedItems = games.filter((item) => {return item.genre === genre})
        setGameData(updatedItems)
    }

    return (
        <NavContainer>
            
            <button onClick={() => setGameData(games)} >All Games</button>
            <button onClick={() => handleClick('Shooter')} >Shooter</button>
            <button onClick={() => handleClick('Sports')} >Sports</button>
            <button onClick={() => handleClick('MMORPG')}>MMORPG</button>
            <button onClick={() => handleClick('Card Game')}>Card Game</button>
            <button onClick={() => handleClick('Social')}>Social</button>
            <button onClick={() => handleClick('Fantasy')}>Fantasy</button>
            <button onClick={() => handleClick('Fighting')}>Fighting</button>
            <button className='about'><NavLink to='/about'>About</NavLink></button>
            <button className='new-game'><NavLink to='/new'>Add Your Game</NavLink></button>
            
            
        </NavContainer>
    )
}

export default NavBar

const NavContainer = styled.div `
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    .about{
        background-color: #17405C; 
    }
    .new-game{
        background-color: #17405C;
    }
    button {
        color: white;
        padding: 10px 20px;
        background-color: blueviolet;
        border-radius: 50px;
        margin: 5px;
        display: inline-block;
        cursor: pointer;
        font-size: 15px;
        :hover{
            z-index: 1;
            transform: scale(1.25);
        }
        a{
            text-decoration: none;
            color: white;
        }
   
    }
    
        
`