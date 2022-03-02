import React, { Component} from 'react';
import { connect } from 'react-redux';


// import from child components...
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import FlashCardContainer from './FlashCardContainer.jsx';


const mapStateToProps = state => ({
    // add pertinent state here
    currentQuestionNum: state.currentQuestionNum,
    cardListLength: state.cardList.length
});

const mapDispatchToProps = dispatch => ({
    resetCards: () => dispatch(actions.resetCardsActionCreator())
});

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="container">
                <div className="outerBox">
                    <h1 id="header">FullStack Flash Cards</h1>
                    { /* note: can we get cardListLength this way with mapStateToProps?... */}
                    <TotalsDisplay totalCards={this.props.cardListLength} currentQuestionNum={this.props.currentQuestionNum} />
                    <FlashCardContainer />
                </div>
            </div>
        );
    }

}
f
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);