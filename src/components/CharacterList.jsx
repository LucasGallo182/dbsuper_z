import React, { useEffect, useState } from 'react'
import Character from './Character'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'

function CharacterList() {

    const URL_API = 'https://dragon-ball-super-api.herokuapp.com/api/characters/'
    const [characters, setCharacters] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(URL_API)
            const data = await response.json()
            if (categoryId) {
                setCharacters(data.filter((char) => char.role == categoryId))
            } else {
                setCharacters(data)
            }
        }
        fetchData()
    }, [categoryId])

    return (
        <Container>
            <div className='divTotal'>
                {characters.map((character) => {
                    return (
                        <Character key={character.id} id={character.id} name={character.name} image={character.imageUrl} />
                    )
                })}
            </div>
        </Container>
    )
}

export default CharacterList