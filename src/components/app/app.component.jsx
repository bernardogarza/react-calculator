import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Display from '../display/display.component';

class App extends Component {
	render() {
		return (
			<div>
				<Display />
			</div>
		);
	}
}

export default App;
