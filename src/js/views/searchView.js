import { elements, elementStrings } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => (elements.searchInput.value = '');

export const clearPrevResults = () => {
  elements.bottom.innerHTML = '';
};
export const clearSearchContainer = () => {
  const searchContainer = document.querySelector(
    elementStrings.searchContainer
  );
  if (searchContainer !== null) {
    searchContainer.remove();
  }
};

export const renderContainer = navigation => {
  const html = `
  <div class="application__search-container">
    <div class="application__search-header">
      <svg class="application__map">
          <use xlink:href="./img/sprite.svg#icon-map"></use>
      </svg>
      <h2 class="heading-secondary">
          - Tap to add the location</h2>
      <svg class="application__close">
          <use xlink:href="./img/sprite.svg#icon-x"></use>
      </svg>
    </div>
  <div class="application__search">
     <div class="application__loader">
        <span></span>
        <span></span>
        <span></span>
     </div>
  </div>
</div>
`;
  navigation.insertAdjacentHTML('beforebegin', html);
};

export const renderResults = (data, container) => {
  const html = `
  <div class="application__location">
  <div class="application__location-container">
     <h3 class="heading-tertiary">${data.name}</h3>
     <h4 class="heading-location-degrees">${data.country}</h4>
  </div>
</div>
  `;
  container.insertAdjacentHTML('beforeend', html);
};
