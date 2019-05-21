/* This View is responsible for rendering the Current Location
Weather information on the User interface.
*/

import { elements } from './base';

export const renderResults = (data, container, paragraph) => {
  const html = `
  <div class="application__b-left">
   <div class="application__degrees">
     <h2 class="heading-degrees">${data.temp}°</h2>
     <p class="paragraph-primary">${paragraph.today}</p>
   </div>
  <div class="application__condition">
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon">
     <p class="paragraph-primary paragraph-primary--condition">${
       data.windSpeed
     }mph / ${data.windDegrees}°</p>
  </div>
 </div>
   `;
  container.insertAdjacentHTML('afterbegin', html);
};

export const renderLocationInfo = (data, container) => {
  const html = `
   <div class="application__time">
      <img src="./img/clock.png" alt="Clock" class="application__clock">
      <h3 class="heading-location">${data.city} , ${data.country}</h3>
      <p class="paragraph-tertiary">${data.weather.time}</p>
</div>`;
  container.insertAdjacentHTML('afterbegin', html);
};
