import { TEMP_ACTION } from './ActionTypes';

export const tempAction = (number = 0) => dispatch => {
  dispatch({
    type: TEMP_ACTION,
    payload: number,
  })
};