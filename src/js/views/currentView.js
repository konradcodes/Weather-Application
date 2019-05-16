/* This View is responsible for rendering the Current Location
Weather information on the User interface.
*/

import { elements } from './base';

export const renderResults = (data, container, paragraph) => {
  const html = `
  <div class="application__b-left">
   <div class="application__degrees">
     <h2 class="heading-degrees">${data.temp}°</h2>
     <p class="paragraph-primary">${paragraph} 2nd</p>
   </div>
  <div class="application__condition">
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon">
     <p class="paragraph-primary paragraph-primary--condition">${
       data.windSpeed
     }mph / ${data.windDegrees}°</p>
  </div>
 </div>
<div class="application__b-right">
  <div class="application__day-weather application__day-weather--1">
     <p class="paragraph-primary">${paragraph}</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">60°</p>
  </div>
  <div class="application__day-weather application__day-weather--2">
     <p class="paragraph-primary">Tue</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">60°</p>
  </div>
  <div class="application__day-weather application__day-weather--3">
     <p class="paragraph-primary">Tue</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">60°</p>
  </div>
  <div class="application__day-weather application__day-weather--4">
     <p class="paragraph-primary">Tue</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">60°</p>
  </div>
  <div class="application__day-weather application__day-weather--5">
     <p class="paragraph-primary">Tue</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">60°</p>
  </div>
  <div class="application__day-weather application__day-weather--6">
     <p class="paragraph-primary">Tue</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">60°</p>
  </div>
</div> 
   `;
  container.insertAdjacentHTML('afterbegin', html);
  //   const paragraphDays = Array.from(elements.paragraphDays);
  //   paragraphDays.forEach()
};
