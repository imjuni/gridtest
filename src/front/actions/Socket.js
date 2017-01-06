export const SOCKET_SEND_ACTION = 'SOCKET_SEND_ACTION';
export const SOCKET_RECV_ACTION = 'SOCKET_RECV_ACTION';

export function socketSendAction(id, data) {
  return {
    type: SOCKET_SEND_ACTION,
    id,
    data,
  };
}

export function socketRecvAction(id, data) {
  return {
    type: SOCKET_RECV_ACTION,
    id,
    data,
  };
}
