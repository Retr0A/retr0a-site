import React from 'react'
import './Card.css'

function Card({ cardImage, cardTitle, cardText, cardLink, height }) {
  return (
    <div className="card">
        <img src={cardImage} alt="card-image"></img>
        <h2>{cardTitle}</h2>
        <h4>{cardText}</h4>
        <a href={cardLink}><button className="success">See More</button></a>
    </div>
  )
}

export default Card