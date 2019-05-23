/*
This Model is responsible for receiving the data regarding the current user location
If the user allows the geolocation it will get users location and display it on the UI
*/
import axios from 'axios';
import date from 'date-and-time';
import { proxy, APIKEY } from '../config';

const geoLocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 0,
};

// Asking User for Current Location Permissions and catching the erorr if not accepted
// Render Error Message will be displayed on the UI after user has declined
function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      ({ code, message }) =>
        reject(
          Object.assign(new Error(message), { name: 'PositionError', code })
        ),
      options
    );
  });
}
const now = new Date();
const time = new Date();
// Current Location Weather Class
export default class Current {
  constructor() {
    this.coordinates = [];
    this.currentDate = {
      dayOfTheWeek: new Date().getDay(),
      month: new Date().getMonth(),
      time: date.format(time, 'h:m A'),
      nextDays: {
        today: date.format(now, 'dddd'),
        one: date.format(date.addDays(now, +1), 'ddd'),
        two: date.format(date.addDays(now, +2), 'ddd'),
        three: date.format(date.addDays(now, +3), 'ddd'),
        four: date.format(date.addDays(now, +4), 'ddd'),
      },
    };
  }

  // Call the getCurrentLocation function and receive current user coordinates
  // The purpose is to get user location and display it on the UI
  async getCoordinates() {
    try {
      const data = await getCurrentLocation(geoLocationOptions);
      this.coordinates = [data.coords.latitude, data.coords.longitude];
    } catch (err) {
      // If user Declined or another error appeared
      console.log(err);
      // Clear Loader
      // Render Erorr Message inside the container
    }
  }

  // Check if coordinates are available on the object itself
  coordinatesAvailable() {
    return this.coordinates.length;
    // If it returns coordinates the length will be 2 because (latitude & longitude)
    // If it will be less than 2 we will create a new state.current object.
  }

  async getWeather() {
    try {
      const response = await axios(
        `${proxy}api.openweathermap.org/data/2.5/weather?&units=metric&lat=${
          this.coordinates[0]
        }&lon=${this.coordinates[1]}&appid=${APIKEY}`
      );
      // Saving the data on the object itself
      // By Saving it over here it will be more maintanable
      // Because I will be able to change it over here instead of every
      // View that this appears in :)
      this.country = response.data.sys.country;
      this.city = response.data.name;
      this.weather = {
        temp: Math.round(response.data.main.temp),
        windSpeed: Math.round(response.data.wind.speed),
        windDegrees: Math.round(response.data.wind.deg),
        nextDays: this.currentDate.nextDays,
        time: this.currentDate.time,
        icon: response.data.weather[0].icon,
      };
    } catch (err) {
      console.log(err);
      // If an error when receiving weather information appeared
      // Render Error on the UI
    }
  }
}
