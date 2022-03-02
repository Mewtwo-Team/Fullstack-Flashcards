import React from 'react';
import FlashCard from './FlashCard.jsx';


const FlashCardDisplay = props => {

    const fetchCards = props.fetchCards;
    const currentQuestionNum = props.currentQuestionNum;
    // console.log('current q here', currentQuestionNum);
    const frontCard = props.frontCard;
    const cardList = props.cardList;
    console.log('value of card front:', frontCard);

    // after useEffect occurs, then state will have all cards in the db (state.cardList); 

    return (
        <div className="displayBox">
            <FlashCard cardList={cardList} currentQuestionNum={currentQuestionNum} fetchCards={fetchCards} frontCard={frontCard}/>
            <button onClick={() => props.previousCard()}>Previous</button>
            <button onClick={() => props.flipCard()}>Flip</button>
            <button onClick={() => props.nextCard()}>Next</button>
            <h3>Difficulty</h3>
            <div>
            <form>
              <input id="1" type="radio" onChange={() => props.updateRating(1)}/>
              <label>1</label>
              <input id="2" type="radio" onChange={() => props.updateRating(2)}/>
              <label>2</label>
              <input id="3" type="radio" onChange={() => props.updateRating(3)}/>
              <label>3</label>
              <input id="4" type="radio" onChange={() => props.updateRating(4)}/>
              <label>4</label>
            </form>
            </div>
        </div>
    );
};

export default FlashCardDisplay;
