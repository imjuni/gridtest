/* eslint  no-console: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mapContextWith } from 'react-context-utils/lib';
import createDebug from 'debug/src/browser';
import 'clusterize.js/clusterize.css';
import Grid from '../components/Grid';
import './Hero.scss';

const logger = createDebug('gt:Hero');

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowSize: 100000,
    };

    this.handleOnChangeRowSize = this.handleOnChangeRowSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChangeRowSize(event) {
    logger(this.state.rowSize);
    this.setState(Object.assign({}, { rowSize: event.target.value }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(Object.assign({}, this.state, { rows: [] }));
    this.props.socket.emit('fetch', this.state.rowSize);
  }

  render() {
    logger('Hero, render');

    return (
      <div className="main-container">
        <h1>Data Fetch</h1>

        <form className="form-data-fetch">
          <div className="pt-control-group">
            <input
              name="row-size"
              className="pt-input pt-fill"
              type="text"
              placeholder="Text input"
              dir="auto"
              value={this.state.rowSize}
              onChange={this.handleOnChangeRowSize}
            />
          </div>

          <div className="pt-control-group">
            <button
              type="submit"
              className="pt-button pt-icon-add"
              onClick={this.handleSubmit}
            >
              Fetch
            </button>

            <button
              type="button"
              className="pt-button"
              onClick={this.handleSubmit}
            >
              Fetch
            </button>
          </div>
        </form>

        <Grid />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.socketRecvReducer.data,
  };
}

function mapper(context) {
  return {
    socket: context.socket,
  };
}

Hero.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func,
  }),
};

export default connect(mapStateToProps)(mapContextWith(mapper)(Hero));
