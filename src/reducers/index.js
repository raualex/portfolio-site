import { combineReducers } from 'redux';
import { setSelectedNav, setSelectedProj } from './selection-reducers';

const rootReducer = combineReducers({
  selectedNav: setSelectedNav,
  selectedProj: setSelectedProj
});

export default rootReducer;