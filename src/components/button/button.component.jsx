import React from 'react';
import PropTypes from 'prop-types';

import './button.style.scss'

const Button = ({ name }) => (
  <div className="button">
    <button type="button">
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
