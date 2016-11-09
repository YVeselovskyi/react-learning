import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeMessage extends React.Component{
	render(){
		let name = this.props.name;
		let message = this.props.message;
		return(
			<div>
				<h1>Hello {name} </h1>
				<h1>Message: {message} </h1>
			</div>
		)
	}
}

class WelcomeForm extends React.Component{
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e){
		e.preventDefault();
		let updates = {};
		let name = this.refs.name.value;
		let message = this.refs.message.value;

		if(name.length > 0){
			this.refs.name.value = '';
			updates.name = name;
		}

		if(message.length > 0){
			this.refs.message.value = '';
			updates.message = message;
		}

		this.props.onNewText(updates);
	}
	render(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input placeholder="Enter your name" type="text" ref="name"/>
				</div>
				<div>
					<textarea placeholder="Enter your message" ref="message"></textarea>
				</div>
				<button>Save</button>
			</form>
		)
	}
}

class Welcome extends React.Component {
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
		<Welcome/>,
		document.getElementById('app')
);
