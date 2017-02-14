import React from 'react';
import {Link} from 'react-router';
import WeatherApi from 'WeatherApi';
import ForecastMessage from 'ForecastMessage';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {weatherForecast: ''};
    }

    componentDidMount(){
        let city = this.props.location.query.city;
        console.log(this.props.location);
        if(city){
            this.forecastRequest(city);
        }
    }
    forecastRequest(city){
        let that = this;
        WeatherApi.getForecast(city).then(function (forecast) {
            that.setState({
                weatherForecast: forecast,
                city: city
            });
        }, function (errorMessage) {
            console.log(errorMessage)
        });
    }
    componentWillReceiveProps(){
      let that = this;
      let forecastCity = this.props.location.query.city;
      that.forecastRequest(forecastCity)
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
