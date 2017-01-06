import { combineReducers } from 'redux';
import { socketRecvReducer, socketSendReducer } from './Socket';

export default combineReducers({
  socketRecvReducer,
  socketSendReducer,
});
