import React from 'react';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text"/>
                    <button className="btn-success">Get Weather</button>
                </form>
            </div>
        );
    }
}

export default WeatherForm;