import React from 'react';

class ForecastMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {weatherData, city} = this.props;
        return (
            <div>
                <h2>It is {weatherData}&#x2103; in {city}</h2>
            </div>
        );
    }
}

export default ForecastMessage;
