
const GameDetails = ({details: {genre, platform, publisher, release_date, short_description}}) => {

    return (
        <div style={{fontSize: 25}}>
            <li>Genre: {genre}</li>
            <li>Platform: {platform}</li>
            <li>Publisher: {publisher}</li>
            <li>Release Date: {release_date}</li>
            <li>Description: {short_description}</li>
        </div>
    )
}

export default GameDetails