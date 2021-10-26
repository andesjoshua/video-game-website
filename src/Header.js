
const Header = ({handleSearch}) => {
return (
    <div>
        <h1>Games 'N Stuff</h1>
        <input onChange={handleSearch} type="text" id="search" placeholder="Search games" />
    </div>
)
}

export default Header