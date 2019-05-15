/*
This Model is receiving the weather information for the next 5 days.
The Purpose of this model is to get the weather information that the user is looking for and store the result.
*/
import axios from 'axios';
import { proxy, APIKEY } from '../config';

export default class Forecast {
  constructor() {}

  async getWeather(id) {
    try {
      const response = await axios(
        `${proxy}api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${APIKEY}&id=${id}`
      );

      this.weather = response.data.list;
      this.city = response.data.city;
    } catch (err) {
      console.log(err);
      // If an error when receiving weather information appeared
      // Render Error on the UI
    }
  }
}
