import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ cardImage, cardTitle, cardText, cardLink, height }) {
  return (
    <div className="card">
        <img src={cardImage} alt="card-image"></img>
        <h2>{cardTitle}</h2>
        <h4>{cardText}</h4>
        <Link to={cardLink}><button className="success">See More</button></Link>
    </div>
  )
}

export default Card