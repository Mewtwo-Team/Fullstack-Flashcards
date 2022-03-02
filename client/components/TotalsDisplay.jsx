import React from 'react';


const TotalsDisplay = props => {

    <div className="innerbox" id="totals">
        <button onClick={() => props.resetCards()}>Reset Cards</button>

        <span id="totalCards">Question number {props.currentQuestionNum} out of {props.totalCards.length} questions</span>

    </div>

};
export default TotalsDisplay;