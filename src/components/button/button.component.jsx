import React from 'react';
import PropTypes from 'prop-types';

import './button.style.scss';

const Button = ({ name, wide, color }) => (
  <div className="button" style={{ width: wide === true ? '50%' : '25%', backgroundColor: color === true ? 'orange' : 'red' }}>
    <button type="button" style={{ backgroundColor: color === true ? '#ea974c' : '#dfdfdf' }}>
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.bool.isRequired,
};

export default Button;
