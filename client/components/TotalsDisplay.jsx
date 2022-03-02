import React, { useEffect }  from 'react';


const TotalsDisplay = props => {

    useEffect(() => {
        props.fetchCards()
    }, [])

    return (
        <div className="innerbox" id="totals">
            <label htmlFor="totalCards">Total Cards:</label>
            <span id="totalCards">{props.totalCards}</span>
            <p>
                <label htmlFor="totalMarkets">Total Markets:</label>
                <span id="totalCards">{props.totalMarkets}</span>
            </p>
        </div>
    );
};
export default TotalsDisplay;