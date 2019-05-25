// Global Application Controller

// Models
import Search from './models/Search';
import Current from './models/Current';
import Forecast from './models/Forecast';
import Other from './models/Other';
import Saved from './models/Saved';

// Views
// eslint-disable-next-line prettier/prettier
import { elements, elementStrings, renderLoader, clearLoader } from './views/base';
import * as currentView from './views/currentView';
import * as forecastView from './views/forecastView';
import * as searchView from './views/searchView';

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
  renderLoader(elements.bottom);
  // 1) New Current Object and add it to state if it doesnt exist yet.
  if (!state.current) state.current = new Current();
  // 2) Receive current location coordinates if they are not currently saved on the state
  if (state.current.coordinatesAvailable() < 2) {
    await state.current.getCoordinates();
  }
  // 3) Get Weather for current location
  if (state.current.coordinatesAvailable() === 2) {
    await state.current.getWeather();
    // Clear Loader from the UI
    clearLoader();

    // 4) Add dataset to the parent element
    elements.bottom.setAttribute('data-id', state.current.coordinates);

    // 5) Render the Current Location Weather Results
    currentView.renderResults(
      state.current.weather,
      elements.bottom,
      state.current.currentDate.nextDays
    );

    // 6) Render Location and it's time
    currentView.renderLocationInfo(state.current, elements.top, state.forecast);
  }
};

// -- OTHER LOCATIONS CONTROLLER --

// -- FORECAST CONTROLLER --
const forecastController = async () => {
  const id = state.current.coordinates;
  // 1) New Current Object and add it to state if it doesnt exist yet.
  if (!state.forecast) {
    state.forecast = new Forecast(id);
  }
  // 2) Get 5 day Weather for current location
  await state.forecast.getWeather();
  // 3) Render weather results on the UI
  forecastView.renderWeather(state.forecast, elements.bottom);
};

// -- SEARCH CONTROLLER --
const searchController = async () => {
  // 1) Get Input from User(view)
  const query = searchView.getInput();
  if (query) {
    // 2) New Search Object and add it to state
    state.search = new Search(query);

    // 3) Prepare UI for the results
    searchView.clearInput();
    searchView.clearPrevResults();

    // Render Loader
    renderLoader(elements.top);

    // Try
    // Search for weather
    // CLear Loader
    // Render results
    // Catch
    // Clear loader
  }
  console.log(query);
};
// -- SAVED LOCATIONS CONTROLLER --

// -- EVENT LISTENERS --

// -- ON PAGE LOAD --

window.addEventListener('load', async () => {
  // Call Current Location Controller
  await currentController();
  // Restore Saved Locations
  // Render Saved Locations if any
  await forecastController();
});

elements.searchForm.addEventListener('submit', e => {
  searchController();
  e.preventDefault();
});
