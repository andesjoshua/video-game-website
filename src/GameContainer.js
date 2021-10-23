import SystemCard from './SystemCard'

const GameContainer = ({gameData: {results}}) => {
    console.log(results)
    return (
        <div>
           <h2>Consoles: {results.map(system => <SystemCard system={system}/>)}</h2>
        </div>
    )
}

export default GameContainer