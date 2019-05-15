/*
This Model is managing the saved locations
The Purpose of this model is to add, delete and save user locations in the local storage 
As well as store them on the object itself.
*/

export default class Saved {
  constructor() {
    this.saved = [];
  }

  // Add location to saved
  addLocation(id) {
    // Add location to saved based on it's id
    this.saved.push(id);
    // Save to Local Storage
    this.persistData();
  }

  removeLocation(id) {
    // Find the index of that element if it exists
    const index = this.saved.findIndex(el => el === id);
    // Remove the element from the this.saved array
    this.saved.splice(index, 1);
    // Update local storage
    this.persistData();
  }

  // Delete all locations
  removeAllLocations() {
    this.saved = [];
    this.persistData();
  }

  // Save to Local Storage
  persistData() {
    // Set Local Storage
    localStorage.setItem('savedLocations', JSON.stringify(this.saved));
  }

  // Read from Local Storage
  readStorage() {
    const storage = JSON.parse(localStorage.getItem('savedLocations'));
    // Restoring saved locations from Local Storage
    if (storage) {
      this.saved = storage;
    }
  }
}
