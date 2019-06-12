// DOM Elements and Loaders
export const elements = {
  bottom: document.querySelector('.application__bottom'),
  top: document.querySelector('.application__top'),
  headingLocation: document.querySelector('.heading-location'),
  searchForm: document.querySelector('.application__form'),
  searchInput: document.querySelector('.application__input'),
  locationInfo: document.querySelector('.application__time'),
  navigation: document.querySelector('.application__navigation'),
  application: document.querySelector('.application'),
};
export const elementStrings = {
  loader: 'application__loader',
  searchContainer: '.application__search-container',
  search: '.application__search',
};
export const renderLoader = (parent, position) => {
  const loader = `<div class="${elementStrings.loader}">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>`;
  parent.insertAdjacentHTML(position, loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};

export const renderErrorMessage = (parent, position, msg) => {
  const html = `
  <div class="application__error">
    <p class="paragraph-error">${msg}</p>
  </div>
  `;
  const location = document.querySelector(parent);
  location.insertAdjacentHTML(position, html);
};
