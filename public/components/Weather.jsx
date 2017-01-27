import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import WeatherApi from 'WeatherApi';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false};
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(location){
        let that = this;

        this.setState({
            isLoading: true,
            location: undefined,
            temp: undefined
        });

        WeatherApi.getTemperature(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            alert(errorMessage)
        });
    }
    componentDidMount(){
      let location = this.props.location.query.location;

      if(location && location.length > 0){
          this.handleSearch(location);
          window.location.hash = '#/';
      }
    }
    render() {
        let {isLoading , location, temp} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            } else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h3>Find your current weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
}

export default Weather;
