import React, { Component } from 'react';
import Display from '../display/display.component';
import ButtonPanel from '../button-panel/button-panel.component';

class App extends Component {
	render() {
		return (
			<div>
				<Display result="0" />
				<ButtonPanel />
			</div>
		);
	}
}

export default App;
