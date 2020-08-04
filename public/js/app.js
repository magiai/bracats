import { check } from './check.js';

document.addEventListener('DOMContentLoaded', () => { 
  const checkerElem = document.getElementById('checker-container');
  const formElem = document.getElementById('form');
  const inputElem = document.getElementById('bracats-input');
  const resultElem = document.getElementById('result');

  formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = check(inputElem.value);

    resultElem.style.setProperty("--bg-image", `${result ? 'url(http://localhost:8000/img/correct.jpg)' : 'url(http://localhost:8000/img/incorrect.jpg)'}`);
    resultElem.ariaLabel = result ? "image of happy cat" : "image of angry cat";
    checkerElem.style.setProperty("--bg", `${result ? '#85D179': '#5B5B5B'}`);
    
  });

  formElem.addEventListener('input', () => {
    resultElem.style.setProperty("--bg-image", '');
    resultElem.ariaLabel = "";
    checkerElem.style.setProperty("--bg", '#D4D4D4');
  });

}, false);
