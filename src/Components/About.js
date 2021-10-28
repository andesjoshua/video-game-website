import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"

function About() {
    return (
        <AboutContainer>
            <h1>Welcome To The Best Free Gaming Site</h1>
            <p>We have over 500 games that you could choose to play and they are ALL FREE. You can click on any of the genre's button to filter your list according to your desire. </p> 
            <p>Also we allow our users to add more games on our site. To add new games click on the button "Add Your Game" and fill out form. We ask that you fill out all the information in form so we can continue to provide the users with most accrute information with your help. After your finished with form simply click the submit button and you'll your game added in the Home page.</p>

            <div><NavLink to='/'><img src="https://wallpaperaccess.com/full/7445.jpg" alt="Game" /></NavLink></div>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div `
    img{
        width: 1400px;
        height: 650px;
        display: flex;
        justify-content: center;
        box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.4);
        cursor: pointer;
    }

`