import { useState } from "react"
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

                <input type='submit' className='submit' onSubmit={handleSubmit}/>
            </form>
        </FormContainer>
    )
}

export default AddGameForm

const FormContainer = styled.div `
    * {
    .submit:hover{
        background-color: #4CAF50; 
        color: white;
        cursor: pointer
      }
    width:50%;
    background-color:darkgray;
    border: 1px solid white;
    margin: 25px auto 0;
    padding: 1em;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    text-align: center;
    }
`