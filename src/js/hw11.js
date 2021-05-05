import '../css/common.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
    body: document.body,
    btnstart: document.querySelector('button[data-action="start"]'), 
    btnstop: document.querySelector('button[data-action="stop"]') 
    };

refs.btnstart.addEventListener('click', onClickStart);

let intervalId = null;

function onClickStart(e) {
  setInterval(setRandomColor, 1000, colors);
  refs.btnstart.disabled = true;
};

