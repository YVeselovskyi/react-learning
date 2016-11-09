import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from '../components/WelcomeMessage.jsx';
import WelcomeForm from '../components/WelcomeForm.jsx';

class WelcomeApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleNewData = this.handleNewData.bind(this);
		this.state = {name: 'Stranger', message: 'Default Message' };
	}
	handleNewData(updates){
		this.setState(updates);
	}
	render() {
		let name = this.state.name;
		let message = this.state.message;
		return (
			<div>
				<WelcomeMessage name={name} message={message}/>
				<WelcomeForm onNewText={this.handleNewData}/>
			</div>
			)
	}
}

ReactDOM.render(
		<WelcomeApp/>,
		document.getElementById('app')
);
