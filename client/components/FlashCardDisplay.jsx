import React from 'react';
import FlashCard from './FlashCard';


const FlashCardDisplay = props => {

    const cards = props.cards;
    const currentQuestionNum = props.currentQuestionNum;
    const frontCard = props.frontCard;

    return (
        <div className="displayBox">
            <FlashCard card={props.cards[currentQuestionNum]}/>
            <button onClick={() => props.previousCard(currentQuestionNum, frontCard)}>Previous</button>
            <button onClick={() => props.flipCard(frontCard)}>Flip</button>
            <button onClick={() => props.nextCard(currentQuestionNum, frontCard)}>Next</button>
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