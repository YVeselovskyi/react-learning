import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick(){
		console.log('Hello');
	}
	render() {
		return (
			<div>
			<h1 onClick={this.handleClick}>Hello, I am {this.props.name}</h1>
			<h2>I am feeling {this.props.feeling} </h2>
			</div>
			)
	}
}

class WelcomeList extends React.Component{
	render(){
		return(
			<div>
				<Welcome name="Alice" feeling="great"/>
			</div>
			)
	}
}

ReactDOM.render(
  <div>
  <WelcomeList/>
  </div>,
  document.getElementById('app')
);