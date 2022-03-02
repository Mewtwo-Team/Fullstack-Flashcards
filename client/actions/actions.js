import * as types from '../constants/actionTypes';

export const flipCardActionCreator = frontCard => ({
    type: types.FLIP_CARD,
    payload: frontCard,
});

export const nextCardActionCreator = currentQuestionNum => ({
    type: types.NEXT_CARD,
    payload: currentQuestionNum,
});

export const previousCardActionCreator = currentQuestionNum => ({
    type: types.PREVIOUS_CARD,
    payload: currentQuestionNum,
});

export const updateRatingActionCreator = cardList => ({
    type: types.UPDATE_RATING,
    payload: cardList,
});

export const fetchAllCardsActionCreator = dispatch => {
    fetch('http://localhost:3000/api')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: types.GET_ALL_CARDS,
                payload: data
            })
            return;
        })
        .catch(err => {
            console.log(err);
        })
};

