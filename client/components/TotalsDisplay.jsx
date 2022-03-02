import React from 'react';


const TotalsDisplay = props => {


    return (
    <div className="innerbox" id="totals">
        <button onClick={() => props.resetCards()}>Reset Cards</button>

        <span id="totalCards">Question number {props.currentQuestionNum}</span>

    </div>
    );
};
export default TotalsDisplay;