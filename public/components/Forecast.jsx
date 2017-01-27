import React from 'react';
import {Link} from 'react-router';
import WeatherApi from 'WeatherApi';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {weatherForecast: ''};
    }
    componentDidMount(){
      let that = this;
      let forecastCity = this.props.location.query.city;

      WeatherApi.getForecast(location).then(function (temp) {
          that.setState({
              weatherForecast: temp
          });
      }, function (errorMessage) {
          console.log(errorMessage)
      });
    }
    render() {
        return (
            <div>
                <h1>{this.state.weatherForecast}</h1>
                <p>Here are a few examples</p>
            </div>
        );
    }
}

export default Forecast;
