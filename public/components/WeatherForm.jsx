import React from 'react';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        let location = this.refs.location.value;

        if(location.length>0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button className="btn-success">Get Weather</button>
                </form>
            </div>
        );
    }
}

export default WeatherForm;