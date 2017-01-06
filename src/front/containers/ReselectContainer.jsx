/* eslint  no-console: 0 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selector from '../reducers/selector/Selector';

function ReselectContainer({ selectedValue }) {
  console.log('ReselectContainer -> mapStateToProps');

  return (
    <span>{selectedValue}</span>
  );
}

ReselectContainer.propTypes = {
  selectedValue: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    selectedValue: selector(state),
  };
}

export default connect(mapStateToProps)(ReselectContainer);
