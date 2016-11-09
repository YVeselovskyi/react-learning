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
		let name = this.refs.name.value;

		if(name.length > 0){
			this.refs.name.value = '';
			this.props.onNewName(name);
		}
	}
	render(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
				<button>Set Name</button>
			</form>
		)
	}
}

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.handleNewName = this.handleNewName.bind(this);
		this.state = {name: 'Stranger' };
	}
	handleNewName(name){
		this.setState({
			name: name
		})
	}
	render() {
		let name = this.state.name;
		let message = this.props.message;
		return (
			<div>
				<WelcomeMessage name={name} message={message}/>
				<WelcomeForm onNewName={this.handleNewName}/>
			</div>
			)
	}
}

Welcome.defaultProps = {
	message: 'This is default message!'
};

ReactDOM.render(
		<Welcome/>,
		document.getElementById('app')
);
