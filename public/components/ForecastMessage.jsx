import React from 'react';

const mainIcons = {
    '01d': '/img/weather-icons/sun.svg',
    '02d': '/img/weather-icons/cloudy.svg',
    '03d': '/img/weather-icons/cloud.svg',
    '04d': '/img/weather-icons/clouds.svg',
    '09d': '/img/weather-icons/rain-1.svg',
    '10d': '/img/weather-icons/rain-2.svg',
    '11d': '/img/weather-icons/storm.svg',
    '13d': '/img/weather-icons/snowflake.svg',
    '50d': '/img/weather-icons/hail.svg',
    '50n': '/img/weather-icons/hail.svg',
    '13n': '/img/weather-icons/snowflake.svg',
    '11n': '/img/weather-icons/storm.svg',
    '01n': '/img/weather-icons/moon-1.svg',
    '02n': '/img/weather-icons/cloud-1.svg',
    '03n': '/img/weather-icons/cloud.svg',
    '04n': '/img/weather-icons/clouds.svg',
    '09n': '/img/weather-icons/rain-1.svg',
    '10n': '/img/weather-icons/rain-3.svg'
};

class ForecastMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container">
                <div className="row center">
                    <h2>{this.props.city}</h2>
                    {this.props.weatherData.map( (e,i) => {
                  return(
                    <div className="col-md-2 forecast-wrap" key={i}>
                        <div className="forecast-info">
                        <p>{e.date}</p>
                        <p>{e.detailedInfo.main}</p>
                        </div>
                        <img className="weather-image" src={mainIcons[e.detailedInfo.icon]}/>
                        <div className="temperatures">
                            <p>Day: {e.dayTemperature} &#x2103;</p>
                            <p>Night: {e.nightTemperature} &#x2103;</p>
                        </div>
                    </div>
                        )
                })}
                </div>
                </div>
            </div>
        );
    }
}

export default ForecastMessage;
