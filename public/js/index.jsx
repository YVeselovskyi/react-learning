import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.onButtonClick = this.onButtonClick.bind(this);
		this.state = {name: 'Stranger' };
	}
	onButtonClick(e){
		e.preventDefault();
		let nameRef = this.refs.name;
		let name = nameRef.value;
		nameRef.value = '';
		if(typeof name === 'string' && name.length>0){
			this.setState({
				name: name
			})
		} else {
			this.setState({
				name: 'Stranger'
			})
		}
	}
	render() {
		let name = this.state.name;
		return (
			<div>
				<h1>Hello, {name} ! </h1>
				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
			</div>
			)
	}
}

ReactDOM.render(
		<Welcome/>,
		document.getElementById('app')
);
