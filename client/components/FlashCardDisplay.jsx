import React from 'react';
import FlashCard from './FlashCard.jsx';


const FlashCardDisplay = props => {

    const fetchCards = props.fetchCards;
    const currentQuestionNum = props.currentQuestionNum;
    const frontCard = props.frontCard;
    const cardList = props.cardList;

    // after useEffect occurs, then state will have all cards in the db (state.cardList); 

    return (
        <div className="displayBox">
            <FlashCard cardList={cardList} currentQuestionNum={currentQuestionNum} fetchCards={fetchCards} frontCard={frontCard}/>
            <button onClick={() => props.previousCard()}>Previous</button>
            <button onClick={() => props.flipCard()}>Flip</button>
            <button onClick={() => props.nextCard()}>Next</button>
            <h3>Difficulty</h3>
            <div>
              <input type="radio" name="radio1" checked="unchecked" onClick={() => props.updateRating(1)}>1</input>
              <input type="radio" name="radio2" checked="unchecked" onClick={() => props.updateRating(2)}>2</input>
              <input type="radio" name="radio3" checked="unchecked" onClick={() => props.updateRating(3)}>3</input>
              <input type="radio" name="radio4" checked="unchecked" onClick={() => props.updateRating(4)}>4</input>
            </div>
        </div>
    );
};

export default FlashCardDisplay;
