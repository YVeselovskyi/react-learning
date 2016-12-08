import axios from 'axios';

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=af5d0b37e055aa231e2f5c3bdee73187&units=metric';

module.exports = {
    getTemperature(location){
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${WEATHER_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        })
    }
};