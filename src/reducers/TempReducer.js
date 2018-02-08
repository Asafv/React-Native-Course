import { TEMP_ACTION } from '../actions/ActionTypes';

const INITIAL_STATE = {
  tempField: [],
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEMP_ACTION:
      return { ...state, tempField: state.tempField.push(action.payload) };
  }
  return state;
};