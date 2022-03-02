import * as types from '../constants/actionTypes';

 const initialState = {
   currentQuestionNum: 0,
   frontCard: true,
   cardList: [{card_front: 'hello', card_back: 'world'}]
 };
 
 const deckReducer = (state = initialState, action) => {
   let currentQuestionNum;
   let frontCard;
   let cardList;

   switch (action.type) {

    case types.RESET_CARDS: {
      currentQuestionNum = 0
    
         return {
           ...state,
           currentQuestionNum
         };
      }
    case types.GET_ALL_CARDS: {
      console.log('we made fetch happen');
       cardList = state.cardList.slice();
       cardList.push(...action.payload);
       return {
         ...state,
         cardList
       }
     }
     
    case types.FLIP_CARD: {
    console.log('frontCard:', frontCard);
    frontCard = !state.frontCard
   
       return {
         ...state,
         frontCard
       };
      }
     case types.NEXT_CARD: {
 
       currentQuestionNum = state.currentQuestionNum + 1; 
       frontCard = !state.frontCard   

       
       return {
         ...state,
         currentQuestionNum,
         frontCard
       };
      }
       case types.PREVIOUS_CARD: {
 
        currentQuestionNum = state.currentQuestionNum - 1;
        frontCard = !state.frontCard      
         
         return {
           ...state,
           currentQuestionNum,
           frontCard
         };

        }
 
     case types.UPDATE_RATING: {
 
       cardList = state.cardList.slice();
       cardList[state.currentQuestionNum][current_score] = action.payload

       return {
         ...state,
         cardList
       };

      }
 
     default: {
       return state;
     }
   }
 };
 
export default deckReducer;

