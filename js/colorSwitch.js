//цвета
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
//Для генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

start.addEventListener('click', onColorSwitchStart);
stop.addEventListener('click', OnColorSwichStop);

function bacgroundSwich() {
  return (document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}
let backgroundInterval = null;
function onColorSwitchStart() {
  backgroundInterval = setInterval(bacgroundSwich, 1000);
  stop.disabled = false;
  start.disabled = true;
}
function OnColorSwichStop() {
  clearInterval(backgroundInterval);
  stop.disabled = true;
  start.disabled = false;
}
