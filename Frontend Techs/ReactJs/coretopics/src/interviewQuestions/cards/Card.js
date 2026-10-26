const Card = ({ cardId, noOfCards, setNoOfCards }) => {

    const handleDeleteCard = (cardId) => {

        setNoOfCards([...noOfCards.filter(id => id !== cardId)])
    };

    return (
        <div className='card alignToCenter'>
            {cardId}
            <button onClick={() => handleDeleteCard(cardId)}>Delete</button>
        </div>
    )
}

export default Card