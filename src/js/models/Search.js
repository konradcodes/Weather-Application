/*
This Model is searching for the CITY provided as a query and it will save the data on the object itself.
Using additional Cities-API to receive data from a large JSON file for better performance.
The Purpose of this model is to find the City that the user is looking for and store the result.
*/

import axios from 'axios';
import { proxy } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    try {
      const res = await axios(`${proxy}https://cities-ids.herokuapp.com/?q=${this.query}`);
      //Saving the data on the object
      this.result = res;
      console.log(this.result);
    } catch (err) {
      console.error(`Something went wrong. ${err}`);
      throw err;
    }
  }
}
