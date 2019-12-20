import React from 'react';
import PropTypes from 'prop-types';

import './display.style.scss';


const Display = ({ result }) => <div className="display"><p>{result}</p></div>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
