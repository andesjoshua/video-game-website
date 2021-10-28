import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = ({handleSearch}) => {
return (
    <CssHeader>
        <input onChange={handleSearch} type="text" id="search" placeholder="Search games..." />
        <div><NavLink to='/'><h1 className='title'>Fun 'N Games  <img className='logo' src="/logo.png" alt="" /> </h1></NavLink></div>
    </CssHeader>
)
}

export default Header

const CssHeader = styled.div `
    h1 {
        font-size: 40px;
        display: flex;
    }
    .logo{
        height: 40px;
        margin: 5px;
    }
    div{
        a{
            text-decoration: none;
            color: white;
            :hover{
                color: red;
            }
        }
    }
    
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