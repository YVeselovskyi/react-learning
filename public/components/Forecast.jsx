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
      let that = this;
      let forecastCity = this.props.location.query.city;

      WeatherApi.getForecast(forecastCity).then(function (temp) {
          that.setState({
              weatherForecast: temp,
              city: forecastCity
          });
      }, function (errorMessage) {
          console.log(errorMessage)
      });
    }
    render() {
        return (
            <div>
                <ForecastMessage weatherData={this.state.weatherForecast} city={this.state.city}/>
            </div>
        );
    }
}

export default Forecast;
