import React from 'react';
import PropTypes from 'prop-types';

import './button.style.scss';

const Button = (props) => {
  const {
    name, wide, color, clickHandler,
  } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <div className="button" style={{ width: wide === true ? '50%' : '25%', backgroundColor: color === true ? 'orange' : 'red' }}>
      <button type="button" style={{ backgroundColor: color === true ? '#ea974c' : '#dfdfdf' }} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
