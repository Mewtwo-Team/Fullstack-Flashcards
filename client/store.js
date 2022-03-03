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
  cardList: [{card_front: 'A JavaScript library for building user interfaces with re-usable components', card_back: 'React'},
  {card_front: 'A state management library with single source of thruth', card_back: 'Redux'},
  {card_front: 'A radical new approach to building user interfaces without the need to virtual DOM diffing', card_back: 'Svelte'}
 ]
};
 
 
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 
 
 
 
 const store = createStore(
  deckReducer,
  //  composeWithDevTools()
  initialState
 );
 

 export default store;