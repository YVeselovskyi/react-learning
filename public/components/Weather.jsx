import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import WeatherApi from 'WeatherApi';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: 'Miami', temp: 88};
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(location){
        let that = this;
        WeatherApi.getTemperature(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            console.log(errorMessage)
        });
    }
    render() {
        let {location, temp} = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        );
    }
}

export default Weather;