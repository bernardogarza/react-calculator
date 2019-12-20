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
          {button.map((el, i) => {
            if (el === '0') {
              return <Button name={el} key={el} wide />;
            }
            if (i === button.length - 1) {
              return <Button name={el} key={el} wide={false} color />;
            }
            return <Button name={el} key={el} wide={false} color={false} />;
          })}

        </div>
      ))
    }
  </div>
);

export default ButtonPanel;
