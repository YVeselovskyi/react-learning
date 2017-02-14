import axios from 'axios';
import moment from 'moment';

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=af5d0b37e055aa231e2f5c3bdee73187&units=metric';
const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=af5d0b37e055aa231e2f5c3bdee73187&units=metric&cnt=6';

module.exports = {
    getTemperature: function(location){
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${WEATHER_URL}&q=${encodedLocation}`;

        return axios.get(requestURL)
            .then(function (response) {
                console.log(response.data);
                return response.data.main.temp;
            })
            .catch(function (error) {
                throw new Error(error.response.data.message);
            });
    },

    getForecast: function(location){
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${FORECAST_URL}&q=${encodedLocation}`;

        return axios.get(requestURL)
            .then(function (response) {
                let loadedData = response.data.list;
                console.log(loadedData);
                let forecast = [];
                for(let i=0; i<loadedData.length; i++){
                    let dailyWeather = {};
                    dailyWeather.date = moment(loadedData[i].dt*1000).format('LL');
                    dailyWeather.detailedInfo = Object.assign({}, loadedData[i].weather[0] );
                    dailyWeather.nightTemperature = loadedData[i].temp.night;
                    dailyWeather.dayTemperature = loadedData[i].temp.day;
                    forecast.push(dailyWeather);
                }
                return forecast;
            })
            .catch(function (error) {
                throw new Error(error.response.data.message);
            });
    }
};
