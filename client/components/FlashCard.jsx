import React from 'react';

const FlashCard = props => {

    const card = props.card;
    const frontCard = props.frontCard;

    let cardSideToDisplay;

    if (frontCard) {
        cardSideToDisplay = card[card_front]
    }
    if (!frontCard) {
        cardSideToDisplay = card[card_back]
    } 

    return (

        <div className="marketBox">
            {cardSideToDisplay}
        </div>
    );
};


export default FlashCard;