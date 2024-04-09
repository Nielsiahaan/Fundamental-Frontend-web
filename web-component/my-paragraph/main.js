import "./my-paragraph.js";

const myParagraphEls = document.querySelectorAll("my-paragraph");

const changeSizeButton = document.querySelector("#changeSize");
const changeColorButton = document.querySelector("#changeColor");

changeSizeButton.onclick = () => {
  myParagraphEls.forEach((el) => el.setAttribute("size", "24"));
};

changeColorButton.onclick = () => {
  myParagraphEls.forEach((el) => el.setAttribute("color", "lightblue"));
};
