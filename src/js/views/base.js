// DOM Elements and Loaders

export const elements = {
  bottom: document.querySelector('.application__bottom'),
};

export const elementStrings = {
  loader: 'application__loader',
};
export const renderLoader = parent => {
  const loader = `<div class="application__loader">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>`;
  parent.insertAdjacenetHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = '';
  if (loader) loader.parentElement.removeChild(loader);
};
