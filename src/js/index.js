//Global Application Controller

//Models
import Search from './models/Search';
import Current from './models/Current';

//Views
import {} from './views/base';
/** //? Global State of the application
 * - Search Object
 * - Forecast Object
 * - Current Location Object(If geolocation allowed by the user)
 * - Saved Locations Object (Implementing Local Storage)
 * - Other Locations Object Receive Data for Saved Locations
 */

const state = {};
//Leaking all the information from state for testing purposes
window.state = state;

const current = new Current();
current.getCoordinates();
setTimeout(() => {
  current.getWeather();
}, 2400);
