import "./awesome-component.js";

let awesomeComponentEl = document.querySelector("awesome-component");

const changeColorButton = document.querySelector("#changeColor");
const changeSizeButton = document.querySelector("#changeSize");
const removeAllButton = document.querySelector("#removeElement");

changeColorButton.onclick = () => {
  // ubah/Tambahkan nilai attribute `color`
  awesomeComponentEl.setAttribute("color", "lightblue");
};

changeSizeButton.onclick = () => {
  // ubah/Tambahkan nilai attribute `size`
  awesomeComponentEl.setAttribute("size", "250");
};

removeAllButton.onclick = () => {
  // Hapus element dari DOM
  awesomeComponentEl.remove();
};
