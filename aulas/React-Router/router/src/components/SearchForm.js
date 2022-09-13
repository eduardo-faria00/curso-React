import './SearchForm.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Search = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search?q=${query}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='text-input' type="text" onChange={(e)=> setQuery(e.target.value)} placeholder='Buscar produto'/>
            <input className='submit-input' type="submit" value="buscar"/>
        </form>
    )
}

export default Search