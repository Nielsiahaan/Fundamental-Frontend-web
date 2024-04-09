import './my-paragraph.js';

let myParagraphEl = document.querySelector('my-paragraph');

const changeSizeButton = document.querySelector('#changeSize');
const changeColorButton = document.querySelector('#changeColor');

changeSizeButton.onclick = () => {
  myParagraphEl.setAttribute('size', '24');
};

changeColorButton.onclick = () => {
  myParagraphEl.setAttribute('color', 'lightblue');
};
