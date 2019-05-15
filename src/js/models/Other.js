/*
This Model is receiving the weather information for the saved locations
The Purpose of this model is to get the weather information about the users saved locations
*/

import axios from 'axios';
import { proxy, APIKEY } from '../config';

export default class Other {
  constructor() {
    this.other = [];
  }
  async getWeather(id) {
    try {
      const response = await axios(`${proxy}api.openweathermap.org/data/2.5/weather?&units=metric&appid=${APIKEY}&id=${id}`);
      this.other.push(response);
    } catch (err) {
      console.log(error);
      //If an error when receiving weather information appeared
      //Render Error on the UI
    }
  }
  clearOther() {
    this.other = [];
  }
}
