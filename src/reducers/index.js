import { combineReducers } from 'redux';
import TempReducer from './TempReducer';

export default combineReducers({
  listReducer: TempReducer
});