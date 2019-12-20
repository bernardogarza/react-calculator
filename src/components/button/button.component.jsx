import React from 'react';
import PropTypes from 'prop-types';

import './button.style.scss'

const Button = ({ name, wide }) => (
  <div className="button" style={{ width: wide === true ? '50%' : '25%' }}>
    <button type="button">
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
