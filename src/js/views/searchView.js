import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => (elements.searchInput.value = '');

export const clearPrevResults = () => {
  elements.bottom.innerHTML = '';
};

export const renderContainer = navigation => {
  const html = `
  <div class="application__search-container">
  <h2 class="heading-secondary">Icon -Tap to add the location</h2>
  <div class="application__search">
     <div class="application__location">
     </div>
  </div>
</div>
`;
  navigation.insertAdjacentHTML('beforebegin', html);
};
{
  /* <div class="application__location-container">
           <h3 class="heading-tertiary">Location</h3>
           <img src="./img/icon.png" alt="Weather Icon" class="application__saved-icon">
           <h4 class="heading-location-degrees">12°C</h4>
        </div> */
}
