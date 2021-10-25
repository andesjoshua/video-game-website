
const GameDetails = ({details: {genre, platform, publisher, release_date, short_description}, details}) => {

    const generateLi = (details) => {
        details.map(gameDetail => {
            for(let i = 0; i < gameDetail.lenth; i++) {
                console.log(gameDetail[i])
            }
        })
    }
    return (
        <div>
            <li>Genre: {genre}</li>
            <li>Platform: {platform}</li>
            <li>Publisher: {publisher}</li>
            <li>Release Date: {release_date}</li>
            <li>Description: {short_description}</li>
        </div>
    )
}

export default GameDetails