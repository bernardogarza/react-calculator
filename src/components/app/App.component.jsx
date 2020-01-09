import React, { Component } from 'react';
import Display from '../display/display.component';
import ButtonPanel from '../button-panel/button-panel.component';
import Calculate from '../../logic/calculate';

import './App.style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => Calculate(state, buttonName));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const show = this.state.next ? this.state.next : this.state.total;
    return (
      <div className="app">
        <Display result={show} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
