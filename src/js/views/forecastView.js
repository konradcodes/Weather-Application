import { elements } from './base';

export const renderWeather = (data, container) => {
  const html = `
   <div class="application__b-right">
  <div class="application__day-weather application__day-weather--1">
     <p class="paragraph-primary">${data.nextDays.one}</p>
     <img src="./img/weather-icons/${
       data.icons.one
     }.svg" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${Math.round(
       data.weather[0].main.temp
     )}°</p>
     <div class="application__temperature">
     <p class="paragraph-max">${Math.round(data.weather[0].main.temp_min)}°</p>
     <span class="paragraph-dot">•</span>
     <p class="paragraph-min">${Math.round(data.weather[0].main.temp_max)}°</p>
   </div>
  </div>
  <div class="application__day-weather application__day-weather--2">
     <p class="paragraph-primary">${data.nextDays.two}</p>
     <img src="./img/weather-icons/${
       data.icons.two
     }.svg" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${Math.round(
       data.weather[1].main.temp
     )}°</p>
     <div class="application__temperature">
      <p class="paragraph-max">${Math.round(data.weather[1].main.temp_min)}°</p>
      <span class="paragraph-dot">•</span>
      <p class="paragraph-min">${Math.round(data.weather[1].main.temp_max)}°</p>
    </div>
  </div>
  <div class="application__day-weather application__day-weather--3">
     <p class="paragraph-primary">${data.nextDays.three}</p>
     <img src="./img/weather-icons/${
       data.icons.three
     }.svg" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${Math.round(
       data.weather[2].main.temp
     )}°</p>
     <div class="application__temperature">
     <p class="paragraph-max">${Math.round(data.weather[2].main.temp_min)}°</p>
     <span class="paragraph-dot">•</span>
     <p class="paragraph-min">${Math.round(data.weather[2].main.temp_max)}°</p>
   </div>
  </div>
  <div class="application__day-weather application__day-weather--4">
     <p class="paragraph-primary">${data.nextDays.four}</p>
     <img src="./img/weather-icons/${
       data.icons.four
     }.svg" alt="Icon Weather" class="application__icon application__icon--day">
     <p class="paragraph-secondary">${Math.round(
       data.weather[3].main.temp
     )}°</p>
     <div class="application__temperature">
     <p class="paragraph-max">${Math.round(data.weather[3].main.temp_min)}°</p>
     <span class="paragraph-dot">•</span>
     <p class="paragraph-min">${Math.round(data.weather[3].main.temp_max)}°</p>
   </div>
  </div>
</div> 
   `;
  container.insertAdjacentHTML('beforeend', html);
};
