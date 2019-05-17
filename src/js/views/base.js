// DOM Elements and Loaders

export const elements = {
  bottom: document.querySelector('.application__bottom'),
  top: document.querySelector('.application__top'),
  headingLocation: document.querySelector('.heading-location'),
};
export const elementStrings = {
  loader: 'application__loader',
};
export const renderLoader = parent => {
  const loader = `<div class="${elementStrings.loader}">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>`;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
