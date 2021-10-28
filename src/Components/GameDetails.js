import styled from "styled-components"

const GameDetails = ({details: {genre, platform, publisher, release_date, short_description}}) => {

    return (
        <DetailsStyle>
            <li>Genre: {genre}</li>
            <li>Platform: {platform}</li>
            <li>Publisher: {publisher}</li>
            <li>Release Date: {release_date}</li>
            <li className='desc'>Description: {short_description}</li>
        </DetailsStyle>
    )
}

export default GameDetails

const DetailsStyle = styled.div`
    *{
     margin: 25px;
     margin-top: 20px
 }
`