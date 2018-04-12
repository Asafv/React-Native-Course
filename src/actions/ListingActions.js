import { TEMP_ACTION } from './ActionTypes';
import axios from 'axios';

export const getList = () => async dispatch => {
  const response = await axios.get('https://s3.amazonaws.com/devops-infra/public/MOCK_DATA.json');
  const { data } = response;
  console.log(response);
  dispatch({
    type: TEMP_ACTION,
    payload: data,
  })
};