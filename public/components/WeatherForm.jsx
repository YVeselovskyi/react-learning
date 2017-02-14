import React from 'react';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        let location = this.refs.location.value;

        if(location.length>0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }

    }
    render() {
        return (
            <div>
            <div className="input-group">
                  <input ref="location" type="text" className="form-control" placeholder="Enter city..."/>
                  <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.onFormSubmit}>Go!</button>
                  </span>
                </div>
            </div>
        );
    }
}

export default WeatherForm;
