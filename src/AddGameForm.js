import { useState } from "react"

const AddGameForm = ({addGame}) => {

    const [formData, setFormData] = useState({
        title: "",
        game_url: "",
        genre: "",
        platform: "",
        developer: "",
        release_date: "",
        short_description: "",
    })

    const handleSubmit = (event) => {
       event.preventDefault()

       const newGame = {
            title: formData.title,
            game_url: formData.game_url,
            genre: formData.genre,
            platform: formData.platform,
            developer: formData.developer,
            release_date: formData.release_date,
            short_description: formData.short_description,            
       }
    }

    return (
        <div>
            <h2>Add your favorite game to our database!</h2> 
            <input placeholder='title'></input> 
            <input placeholder='Game URL'></input> 
            <input placeholder='Genre'></input> 
            <input placeholder='Platform'></input> 
            <input placeholder='Developer'></input> 
            <input placeholder='Release Date'></input> 
            <input placeholder='Description'></input> 
            <input type='submit' onSubmit={handleSubmit}/>
        </div>
    )
}

export default AddGameForm