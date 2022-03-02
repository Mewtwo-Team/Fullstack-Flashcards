import { combineReducers } from 'redux';

// import all reducers here
import deckReducer from './deckReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  deck: deckReducer,
});

// make the combined reducers available for import
export default reducers;