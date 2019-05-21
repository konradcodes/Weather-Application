/*
This Model is receiving the weather information for the next 5 days.
The Purpose of this model is to get the weather information that the user is looking for and store the result.
*/
import axios from 'axios';
import date from 'date-and-time';
import { proxy, APIKEY } from '../config';

const now = new Date();
// Forecast weather class
export default class Forecast {
  constructor(info) {
    this.info = info;
    this.currentDate = {
      dayOfTheWeek: new Date().getDay(),
      month: new Date().getMonth(),
      nextDays: {
        today: date.format(now, 'dddd'),
        one: date.format(date.addDays(now, +1), 'ddd'),
        two: date.format(date.addDays(now, +2), 'ddd'),
        three: date.format(date.addDays(now, +3), 'ddd'),
        four: date.format(date.addDays(now, +4), 'ddd'),
      },
    };
  }

  async getWeather() {
    let call;
    if (this.info.length === 1) {
      call = `${proxy}api.openweathermap.org/data/2.5/forecast?id=${
        this.info[0]
      }appid=${APIKEY}`;
    } else {
      call = `${proxy}api.openweathermap.org/data/2.5/forecast?&units=metric&lat=${
        this.info[0]
      }&lon=${this.info[1]}&appid=${APIKEY}`;
    }
    try {
      const response = await axios(`${call}`);
      console.log(response);
      this.city = response.data.city.name;
      this.country = response.data.city.country;
      this.nextDays = this.currentDate.nextDays;
      this.weather = response.data.list.map(el => ({
        temp: Math.round(el.main.temp),
        icon: el.weather[0].icon,
      }));
    } catch (err) {
      console.log(err);
      // If an error when receiving weather information appeared
      // Render Error on the UI
    }
  }
}
