import React, { useState, useEffect } from 'react'
import CharacterDetail from './CharacterDetail'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function CharacterDetailList() {

    const URL_API = 'https://dragon-ball-super-api.herokuapp.com/api/characters/'
    const [characters, setCharacters] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(URL_API)
            const data = await response.json()
            if (id) {
                setCharacters(data.filter((char) => char.id === parseInt(id)))
            } else {
                setCharacters(data)
            }
        }
        fetchData()
    }, [id])

    return (
        <Container>
            <div className='divTotal'>
                {characters.map((character) => {
                    return (
                        <CharacterDetail key={character.id} character={character} image={character.image} />
                    )
                })}
            </div>
        </Container>
    )
}

export default CharacterDetailList