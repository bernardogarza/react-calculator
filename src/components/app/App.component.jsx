import React from 'react';
import Display from '../display/display.component';
import ButtonPanel from '../button-panel/button-panel.component';
// eslint-disable-next-line no-unused-vars
import Calculate from '../../logic/calculate';

import './App.style.scss';

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
