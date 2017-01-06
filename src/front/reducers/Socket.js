import { SOCKET_SEND_ACTION, SOCKET_RECV_ACTION } from '../actions/Socket';

export const socketSendReducer = (state = { id: null, data: null }, action) => {
  switch (action.type) {
    case SOCKET_SEND_ACTION:
      return Object.assign({}, state, {
        id: action.id,
        data: action.data,
      });
    default:
      return state;
  }
};

export const socketRecvReducer = (state = { id: null, data: null }, action) => {
  switch (action.type) {
    case SOCKET_RECV_ACTION:
      return Object.assign({}, state, {
        id: action.id,
        data: action.data,
      });
    default:
      return state;
  }
};
