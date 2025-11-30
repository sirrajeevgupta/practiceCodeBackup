import React from 'react'
import '../../index.css'

const Card = ({ cardId, noOfCards, setNoOfCards }) => {

    const handleDeleteCard = (cardId) => {
        setNoOfCards([...noOfCards.slice(0, -1)])

    };

    return (
        <div className='card alignToCenter'>
            {cardId}
            <button onClick={() => handleDeleteCard(cardId)}>Delete</button>
        </div>
    )
}

export default Card