import React, { Component } from 'react';
import MouseComponent from './MouseComponent'
import CatComponent from './CatComponent'
import CatComponent from './CatComponent'
class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				{/* one more component missing */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
