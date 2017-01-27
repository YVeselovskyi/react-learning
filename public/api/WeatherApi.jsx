import axios from 'axios';

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=af5d0b37e055aa231e2f5c3bdee73187&units=metric';

module.exports = {
    getTemperature: function(location){
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${WEATHER_URL}&q=${encodedLocation}`;

        return axios.get(requestURL)
            .then(function (response) {
                return response.data.main.temp;
            })
            .catch(function (error) {
                throw new Error(error.response.data.message);
            });
    }
};
