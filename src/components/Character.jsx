import React from 'react'
import '../style.css'
import { Link } from "react-router-dom"

function Character( {id, name, image} ) {
  return (
    <div key={id} className='card'>
      <Link to={`/character/${id}`} className='linkCharacter'>
        <div className='card-info'>
            <p className='title'>{name}</p>
            <img src={image} alt={name} />
        </div>
      </Link>
    </div>
  )
}

export default Character