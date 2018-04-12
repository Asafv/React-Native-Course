import { combineReducers } from 'redux';
import TempReducer from './ListingReducer';

export default combineReducers({
  listReducer: TempReducer
});