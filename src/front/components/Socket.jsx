/* eslint  no-console: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ContextProvider } from 'react-context-utils/lib';
import socketio from 'socket.io-client';
import createDebug from 'debug/src/browser';
import { socketRecvAction } from '../actions/Socket';

const logger = createDebug('gt:Socket.jsx');
const context = {
  socket: {
    handle: null,
    emit: (id, ...args) => {
      if (context.socket.handle) {
        context.socket.handle.emit(id, ...args);
      } else {
        logger('socket handle missing');
      }
    },
  },
};

class Socket extends Component {
  componentWillMount() {
    // Do not use webpack-dev-server proxy,
    // If you massive data transmission, it will cause browser crushing.
    const socket = socketio('http://localhost:8080');

    context.socket.handle = socket;

    logger('componentWillMount');

    socket.on('connected', () => {
      logger('socket connected');
      socket.send('connected:recv');
    });

    socket.on('fetch:data', (data) => {
      this.props.onSocketRecv('fetch:data', data);
    });
  }

  render() {
    return (
      <ContextProvider context={context}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

Socket.propTypes = {
  children: PropTypes.element,
  onSocketRecv: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onSocketRecv: (id, data) => { dispatch(socketRecvAction(id, data)); },
  };
}

export default connect(null, mapDispatchToProps)(Socket);
