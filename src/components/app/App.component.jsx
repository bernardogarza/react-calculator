import React from 'react';
import Display from '../display/display.component';
import ButtonPanel from '../button-panel/button-panel.component';

import './App.style.scss'
import '../global.style.scss'

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
