import UseMemoExample from "./reactCoreTopics/UseMemoExample";
import UseRefExample from "./reactCoreTopics/UseRefExample";
import LazyLoadingExample from "./reactCoreTopics/LazyLoadingExample"
import Card from "./interviewQuestions/cards/Card";
import { useState } from "react";
import './index.css'

function App() {

  const [noOfCards, setNoOfCards] = useState([]);

  const handleAddCard = () => {
    setNoOfCards([...noOfCards, noOfCards.length + 1]);
  };


  return (
    <div className="App">
      <div className="cardConatiner">
        {noOfCards.length ? (noOfCards.map((cardId) => (<li key={cardId}>{<Card cardId={cardId} noOfCards={noOfCards} setNoOfCards={setNoOfCards} />}</li>))) : (<p>There are no cards to display!</p>)}
      </div>
      <br />
      <button onClick={handleAddCard}>Add a  card!</button>
    </div>
  );
}

export default App;
