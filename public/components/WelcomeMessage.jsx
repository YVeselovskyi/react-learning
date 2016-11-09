import React from 'react';

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

module.exports = WelcomeMessage;
