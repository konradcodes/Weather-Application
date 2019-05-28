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
      <div class="application__loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
     </div>
  </div>
</div>
`;
  navigation.insertAdjacentHTML('beforebegin', html);
};
