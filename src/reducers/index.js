import { combineReducers } from 'redux';
import { setSelectedNav } from './selection-reducers';

const rootReducer = combineReducers({
  selectedNav: setSelectedNav
});

export default rootReducer;