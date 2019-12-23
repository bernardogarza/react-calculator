import React from 'react';
import Button from '../button/button.component';

import './button-panel.style.scss';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => (
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
            />
          ))}

        </div>
      ))
    }
  </div>
);

export default ButtonPanel;
