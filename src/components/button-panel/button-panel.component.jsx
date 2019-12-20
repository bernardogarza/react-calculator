import React from 'react';
import Button from '../button/button.component';

import './button-panel.style.scss'

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => (
  <div className="buttons">
    <div className="row1 rows">{buttons[0].map(el => <Button name={el} key={el} />)}</div>
    <div className="row2 rows">{buttons[1].map(el => <Button name={el} key={el} />)}</div>
    <div className="row3 rows">{buttons[2].map(el => <Button name={el} key={el} />)}</div>
    <div className="row4 rows">{buttons[3].map(el => <Button name={el} key={el} />)}</div>
    <div className="row5 rows">{buttons[4].map(el => <Button name={el} key={el} />)}</div>
  </div>
);

export default ButtonPanel;
