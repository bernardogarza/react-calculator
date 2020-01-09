import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button.component';

import './button-panel.style.scss';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = (props) => {
  const {
    clickHandler,
  } = props;

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div className="buttons">
      {
        buttons.map((button, index) => (
          <div className="rows" key={`row${index + 1}}`}>
            {button.map((el, i) => (
              <Button
                name={el}
                key={el}
                wide={el === '0'}
                color={i === button.length - 1}
                clickHandler={handleClick}
              />
            ))}
          </div>
        ))
      }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
