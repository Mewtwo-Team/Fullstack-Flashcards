
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import FlashCardDisplay from '../components/FlashCardDisplay.jsx';


const mapStateToProps = state => ({
  // provide pertinent state here
  currentQuestionNum: state.currentQuestionNum,
  frontCard: state.frontCard,
  cardList: state.cardList
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creatorse
  fetchCards: () => actions.fetchAllCardsActionCreator(dispatch),
  nextCard: () => dispatch(actions.nextCardActionCreator()),
  previousCard: () => dispatch(actions.previousCardActionCreator()),
  flipCard: () => dispatch(actions.flipCardActionCreator()),
  updateRating: (e) => dispatch(actions.updateRatingActionCreator(e))

});


class FlashCardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('here are props', this.props);
    return (
      <div className="innerbox">
        { /* add components here... */}
        <FlashCardDisplay cardList={this.props.cardList} fetchCards={this.props.fetchCards} nextCard= {this.props.nextCard} previousCard={this.props.previousCard} flipCard={this.props.flipCard} updateRating={this.props.updateRating} currentQuestionNum={this.props.currentQuestionNum} frontCard={this.props.frontCard} />
      </div>
    );
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(FlashCardContainer);