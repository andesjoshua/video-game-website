import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const AddGameForm = ({addGame}) => {

    const [formData, setFormData] = useState({
        title: "",
        game_url: "",
        genre: "",
        platform: "",
        developer: "",
        release_date: "",
        short_description: "",
        thumbnail: ""
    })

    const history = useHistory();

    const handleSubmit = (event) => {
       event.preventDefault()
       history.push('/')
       
       const newGame = {
            title: formData.title,
            game_url: formData.game_url,
            genre: formData.genre,
            platform: formData.platform,
            developer: formData.developer,
            release_date: formData.release_date,
            short_description: formData.short_description,  
            thumbnail: formData.thumbnail          
       }
       fetch('http://localhost:3000/games', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newGame)
        })
        .then(r => r.json())
        .then(addGame)
  }
    

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <FormContainer>
            <button><NavLink to='/'>Home</NavLink></button>
            <h2>Add your favorite game to our database!</h2> 
            <form onSubmit={handleSubmit}>
                <input name='title' placeholder='title' value={formData.title} onChange={handleChange}/>
                <input name='game_url'placeholder='Game URL' value={formData.game_url} onChange={handleChange}/>
                <input name='genre'placeholder='Genre' value={formData.genre} onChange={handleChange}/>
                <input name='platform'placeholder='Platform' value={formData.platform} onChange={handleChange}/>
                <input name='developer'placeholder='Developer' value={formData.developer} onChange={handleChange}/>
                <input name='release_date'placeholder='Release Date' value={formData.release_date} onChange={handleChange}/>
                <input name='short_description'placeholder='Description' value={formData.short_description} 
                onChange={handleChange}/>
                <input name='thumbnail'placeholder='thumbnail' value={formData.thumbnail} onChange={handleChange}/>

                <input type='submit' onSubmit={handleSubmit}/>
            </form>
        </FormContainer>
    )
}

export default AddGameForm

const FormContainer = styled.div `
    
    button {
       color: white;
        padding: 10px 20px;
        background-color: blueviolet;
        border-radius: 50px;
        margin: 5px;
        display: inline-block;
        cursor: pointer;
        font-size: 15px;
        :hover{
            z-index: 1;
            transform: scale(1.25); 
        }
            a{
            text-decoration: none;
            color: white
        }
    }
`