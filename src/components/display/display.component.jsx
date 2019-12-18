import React from 'react';
import PropTypes from 'prop-types';

export const Display = (result) => <div className="display">{result}</div>;

Display.propTypes = {
	result: PropTypes.string.isRequired
};

Display.defaultProps = {
	result: '0'
};