import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm/>
                <WeatherMessage/>
            </div>
        );
    }
}

export default Weather;