import React from 'react';

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

module.exports = WelcomeForm;
