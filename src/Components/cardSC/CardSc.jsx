import React from 'react'
import Card from 'react-bootstrap/Card';
import './style.css'

const CardSc = (props) => {
  return (
    <Card id='CardSc'>
      <Card.Body className='cardScBody'>
        <Card.Title id='cardScTitle'>{props.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardSc