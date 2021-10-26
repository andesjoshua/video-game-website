import { Link } from "react-router-dom";
import {games} from './db.json'
import {NavLink} from 'react-router-dom'



const NavBar = ({setGameData}) => {

        const handleClick = (genre) => {
        const updatedItems = games.filter((item) => {return item.genre === genre})
        setGameData(updatedItems)
    }

    return (
        <div>
           
            <NavLink to='/new'>Add Your Own Game! </NavLink>
            <NavLink to='/games'>Main Page </NavLink>
            
            <button onClick={() => setGameData(games)} >All Games</button>
            <button onClick={() => handleClick('Shooter')} >Shooter</button>
            <button onClick={() => handleClick('Sports')} >Sports</button>
            <button onClick={() => handleClick('MMORPG')}>MMORPG</button>
            <button onClick={() => handleClick('Card Game')}>Card Game</button>
            <button onClick={() => handleClick('Social')}>Social</button>
            <button onClick={() => handleClick('Fantasy')}>Fantasy</button>
            <button onClick={() => handleClick('Fighting')}>Fighting</button>
        </div>
    )
}

export default NavBar