import { TEMP_ACTION } from '../actions/ActionTypes';

const INITIAL_STATE = {
  list: [],
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEMP_ACTION:
      return { ...state, list: action.payload };
  }
  return state;
};