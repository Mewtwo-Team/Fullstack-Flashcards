import * as types from '../constants/actionTypes';

export const flipCardActionCreator = () => ({
    type: types.FLIP_CARD
});

export const nextCardActionCreator = () => ({
    type: types.NEXT_CARD
});

export const previousCardActionCreator = () => ({
    type: types.PREVIOUS_CARD
});

export const updateRatingActionCreator = (rating) => ({
    type: types.UPDATE_RATING,
    payload: rating
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

export const resetCardsActionCreator = () => ({
    type: types.RESET_CARDS
});

