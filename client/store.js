/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

 import { createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import reducers from './reducers/index';
 import deckReducer from './reducers/deckReducer';
 
 
 const initialState = {
  currentQuestionNum: 0,
  frontCard: true,
  cardList: [{card_front: 'hello', card_back: 'world'}]
};
 
 
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 
 
 
 
 const store = createStore(
  deckReducer,
  //  composeWithDevTools()
  initialState
 );
 

 export default store;