import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { mapContextWith } from 'react-context-utils/lib';
import Clusterize from 'clusterize.js/clusterize';
import createDebug from 'debug/src/browser';

const logger = createDebug('gt:Grid');

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount() {
    this.grid = new Clusterize({
      scrollId: 'scrollArea',
      contentId: 'contentArea',
    });

    logger('componentDidMount ->', this.grid, this.props.socket);

    // this.props.socket.handle.on('fetch:data', (data) => {
    //   const tableRow = data.map((row) => {
    //     const keys = Object.keys(row);
    //     const td = keys.map(key => row[key]).map(value => `<td>${value}</td>`);
    //     return `<tr>${td.join(' ')}</tr>`;
    //   });
    //
    //   this.setState(Object.assign({}, this.state, { rows: this.state.rows.concat(tableRow) }));
    //   this.grid.append(tableRow);
    //
    //   logger('row receive, -> ', this.state.rows.length);
    // });
    //
    // this.props.socket.handle.on('fetch:fin', () => {
    //   this.grid.refresh();
    //   logger('fetch:fin');
    // });
  }

  componentWillReceiveProps(nextProps) {
    const tableRow = nextProps.data.map((row) => {
      const keys = Object.keys(row);
      const td = keys.map(key => row[key]).map(value => `<td>${value}</td>`);
      return `<tr>${td.join(' ')}</tr>`;
    });

    logger(tableRow);

    this.setState(Object.assign({}, this.state, {
      rows: this.state.rows.concat(tableRow),
    }));

    logger('row receive, -> ', this.state.rows.length);

    this.grid.append(tableRow);
  }

  render() {
    logger('Grid, rows length -> ', this.state.rows.length);

    return (
      <div className="grid-container">
        <h1>Grid - {this.state.rows.length}</h1>

        <div className="clusterize">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>log_time</th>
                <th>log_id</th>
                <th>uid</th>
                <th>email</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>address</th>
                <th>sentence</th>
                <th>ip</th>
                <th>user_agent</th>
              </tr>
            </thead>
          </table>
          <div id="scrollArea" className="clusterize-scroll">
            <table>
              <tbody id="contentArea" className="clusterize-content">
                <tr className="clusterize-no-data">
                  <td>Loading data…</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func,
    handle: PropTypes.shape({
      on: PropTypes.func,
    }),
  }),
};

function mapper(context) {
  return {
    socket: context.socket,
  };
}

function mapStateToProps(state) {
  return {
    id: state.socketRecvReducer.id,
    data: state.socketRecvReducer.data,
  };
}

export default connect(mapStateToProps)(mapContextWith(mapper)(Grid));
