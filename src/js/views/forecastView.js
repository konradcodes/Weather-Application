import { elements } from './base';

export const renderWeather = (data, container) => {
  const html = `
   <div class="application__b-right">
  <div class="application__day-weather application__day-weather--1">
     <p class="paragraph-primary">${data.nextDays.one}</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${data.weather[0].temp}°</p>
  </div>
  <div class="application__day-weather application__day-weather--2">
     <p class="paragraph-primary">${data.nextDays.two}</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${data.temp}°</p>
  </div>
  <div class="application__day-weather application__day-weather--3">
     <p class="paragraph-primary">${data.nextDays.three}</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${data.temp}°</p>
  </div>
  <div class="application__day-weather application__day-weather--4">
     <p class="paragraph-primary">${data.nextDays.four}</p>
     <img src="./img/Icon.png" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${data.temp}°</p>
  </div>
</div> 
   `;
  container.insertAdjacentHTML('beforeend', html);
};
