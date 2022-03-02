import React, { useEffect } from 'react';

  const FlashCard = props => {

    useEffect(() => {
        props.fetchCards()
    }, [])

    const frontCard = props.frontCard;
    const cardList = props.cardList;
    const currentQuestionNum = props.currentQuestionNum; 
    let cardSideToDisplay;

 // receive an array of objects 
 // we want the card at index[currentQuestionNum]
    if (frontCard) {
        cardSideToDisplay = cardList[currentQuestionNum].card_front;
    }
    else {
        cardSideToDisplay = cardList[currentQuestionNum].card_back; 
    } 

    return (

        <div className="marketBox">
            {cardSideToDisplay}
        </div>
    );
};


export default FlashCard;