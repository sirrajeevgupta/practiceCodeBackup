import Card from "./Card";
import { useState } from "react";
import './cards.css'

const CardsApp = () => {

    const [noOfCards, setNoOfCards] = useState([]);

    const handleAddCard = () => {

        // Assign unique ID
        const newID = noOfCards.length ? Math.max(...noOfCards) + 1 : 1
        setNoOfCards([...noOfCards, newID]);
    };

    return (
        <div className="app">
            <ul className="cardConatiner">
                {noOfCards.length ?
                    (noOfCards.map((cardId) => (<Card key={cardId} cardId={cardId} noOfCards={noOfCards} setNoOfCards={setNoOfCards} />)))
                    :
                    (<p style={{ fontWeight: "bold" }}>There are no cards to display!</p>)}
            </ul>
            <br />
            <button onClick={handleAddCard}>Add a  card!</button>
        </div>
    )
}

export default CardsApp