// Global Application Controller

// Models
import Search from './models/Search';
import Current from './models/Current';
import Forecast from './models/Forecast';
import Other from './models/Other';
import Saved from './models/Saved';

// Views
import {
  elements,
  elementStrings,
  renderLoader,
  clearLoader,
} from './views/base';

/** //* Global State of the application
 * - Search Object
 * - Forecast Object
 * - Current Location Object(If geolocation allowed by the user)
 * - Saved Locations Object (Implementing Local Storage)
 * - Other Locations Object Receive Data for Saved Locations
 */

const state = {};
// Leaking all the information from state for testing purposes
window.state = state;

// -- CONTROLLERS --
// Name must end with 'controller'

// -- CURRENT LOCATION CONTROLLER --

const currentController = async () => {
  // Render Loader on the UI

  // 1) New Current Object and add it to state if it doesnt exist yet.
  if (!state.current) state.current = new Current();
  // Receive current location coordinates if they are not currently saved on the state
  if (state.current.coordinatesAvailable() < 2) {
    await state.current.getCoordinates();
  }
  // Get Weather for current location
  if (state.current.coordinatesAvailable === 2) {
    state.current.getWeather();

    // Clear Loader from the UI

    // Render the Weather Results
  }
  const response = state.current.coordinatesAvailable();
};

// -- OTHER LOCATIONS CONTROLLER --

// -- FORECAST CONTROLLER --

// -- SEARCH CONTROLLER --

// -- SAVED LOCATIONS CONTROLLER --

// -- EVENT LISTENERS --

// -- ON PAGE LOAD --

window.addEventListener('load', () => {
  // Call Current Location Controller
  currentController();
  // Restore Saved Locations
  // Render Saved Locations if any
});
