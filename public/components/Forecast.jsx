import React from 'react';
import {Link} from 'react-router';
import WeatherApi from 'WeatherApi';
import ForecastMessage from 'ForecastMessage';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {weatherForecast: ''};
    }
    componentWillReceiveProps(){
      let that = this;
      let forecastCity = this.props.location.query.city;

      WeatherApi.getForecast(forecastCity).then(function (forecast) {
          that.setState({
              weatherForecast: forecast,
              city: forecastCity
          });
      }, function (errorMessage) {
          console.log(errorMessage)
      });

    }
    render() {
        return (
            <div>
                { this.state.weatherForecast ? <ForecastMessage city={this.state.city} weatherData={this.state.weatherForecast}/> : 'Loading...'}
            </div>
        );
    }
}

export default Forecast;
