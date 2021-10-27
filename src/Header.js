import styled from "styled-components"
const Header = ({handleSearch}) => {
return (
    <CssHeader>
        <input onChange={handleSearch} type="text" id="search" placeholder="Search games..." />
        <h1>Games 'N Fun</h1>
    </CssHeader>
)
}

export default Header

const CssHeader = styled.div `
    
    input {
        float: right;
        background-color: white;
        border: 2px solid color #222222;
        padding: 0.4rem 0.8rem;
        border-radius: 50px;
        font-size: 1rem;
        color: black;
        font-family: inherit;
        /* margin-bottom: 0px; */
        position: relative;

    }
   
    

`