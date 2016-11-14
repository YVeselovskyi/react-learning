import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<LoginForm/>
			</div>
			)
	}
}

ReactDOM.render(
		<App/>,
		document.getElementById('app')
);
