import * as types from '../constants/actionTypes';

 const initialState = {
   currentQuestionNum: 0,
   frontCard: true,
   cardList: []
 };
 
 const deckReducer = (state = initialState, action) => {
   let currentQuestionNum;
   let frontCard;
   let cardList;

   switch (action.type) {

    case types.RESET_CARDS:
      currentQuestionNum = 0
    
         return {
           ...state,
           currentQuestionNum
         };

    case types.GET_ALL_CARDS: {
       cardList = state.cardList.slice();
       cardList.push(...action.payload);
       return {
         ...state,
         cardList
       }
     }
     
    case types.FLIP_CARD:
    frontCard = !state.frontCard   
  
       return {
         ...state,
         frontCard
       };
 
     case types.NEXT_CARD:
 
       currentQuestionNum = state.currentQuestionNum + 1; 
       frontCard = !state.frontCard   

       
       return {
         ...state,
         currentQuestionNum,
         frontCard
       };

       case types.PREVIOUS_CARD:
 
        currentQuestionNum = state.currentQuestionNum - 1;
        frontCard = !state.frontCard      
         
         return {
           ...state,
           currentQuestionNum,
           frontCard
         };
 
     case types.UPDATE_RATING:
 
       cardList = state.cardList.slice();
       cardList[state.currentQuestionNum][current_score] = action.payload

       return {
         ...state,
         cardList
       };
 
     default: {
       return state;
     }
   }
 };
 
 export default deckReducer;