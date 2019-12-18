import React from "react";

import { Button } from "../button/button.component";

const buttons = [
  ["AC", "+/-", "%", "÷"],
  ["7", "8", "9", "X"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "+"]
];

export const ButtonPanel = () => (
  <div className="buttons">
    <div className="row1">
      {buttons[0].map(el => (
        <Button name={el} key={el} />
      ))}
    </div>
    <div className="row2">
      {buttons[1].map(el => (
        <Button name={el} key={el} />
      ))}
    </div>
    <div className="row3">
      {buttons[2].map(el => (
        <Button name={el} key={el} />
      ))}
    </div>
    <div className="row4">
      {buttons[3].map(el => (
        <Button name={el} key={el} />
      ))}
    </div>
    <div className="row5">
      {buttons[4].map(el => (
        <Button name={el} key={el} />
      ))}
    </div>
  </div>
);
