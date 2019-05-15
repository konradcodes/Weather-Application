/*
This Model is responsible for receiving the data regarding the current user location
If the user allows the geolocation it will get users location.
*/
import axios from 'axios';
import { proxy, APIKEY } from '../config';

const geoLocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 0
};

//Asking User for Current Location Permissions and catching the erorr if not accepted
// Render Error Message will be displayed on the UI after user has declined
function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      ({ code, message }) => reject(Object.assign(new Error(message), { name: 'PositionError', code })),
      options
    );
  });
}
//Current Location Weather Class
export default class Current {
  constructor() {
    this.coordinates = [];
  }
  //Call the getCurrentLocation function and receive current user coordinates
  //The purpose is to get user location and display it on the UI
  async getCoordinates() {
    try {
      const data = await getCurrentLocation(geoLocationOptions);
      this.coordinates = [data.coords.latitude, data.coords.longitude];
      console.log(this.coordinates);
    } catch (err) {
      //If user Declined or another error appeared
      console.log(err);
      //Clear Loader
      //Render Erorr Message inside the container
    }
  }
  async getWeather() {
    try {
      const response = await axios(
        `${proxy}api.openweathermap.org/data/2.5/weather?&units=metric&lat=${this.coordinates[0]}&lon=${
          this.coordinates[1]
        }&appid=${APIKEY}`
      );
      //Saving the data on the object
      //This.weaether will store all the data regarding the weather.
      this.weather = response.data;
    } catch (err) {
      console.log(err);
      //If an error when receiving weather information appeared
      //Render Error on the UI
    }
  }
}
