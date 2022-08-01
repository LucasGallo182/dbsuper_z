import React from 'react'
import '../style.css'

function CharacterDetail({ character }) {
    return (
        <div key={character.id} className='cardDetail'>
            <div className='card-detail-img-name'>
                <img src={character.imageUrl} alt={character.name} />
            </div>
            <div className='card-detail-caracts'>
                <h2 className='title-detail'>
                    <strong>{character.name}</strong>
                </h2>
                <p>
                    <strong>Especie:</strong> {character.specie}
                </p>
                <p>
                    <strong>Rol:</strong> {character.role}
                </p>
                <p>
                    <strong>Status:</strong> {character.status}
                </p>
                <p>
                    <strong>Universo:</strong> {character.universe}
                </p>
                <p>
                    <strong>Transformaciones:</strong> {character.transform}
                </p>
                <p>
                    <strong>Planeta de Origen:</strong> {character.originplanet}
                </p>
            </div>
        </div>
    )
}

export default CharacterDetail