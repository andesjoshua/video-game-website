import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link exact to='/new'>Add Your Own Game!</Link>
        </div>
    )
}

export default NavBar