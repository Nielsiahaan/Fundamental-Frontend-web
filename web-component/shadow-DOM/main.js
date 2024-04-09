// Membuat shadow Host dengan <div>
const divElement = document.createElement("div");

// Membuat elemen untuk dimasukkan dalam shadow tree
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini adalah konten <h1> dalam shadow DOM";

// Membuat/melampirkan shadow root pada shadow host
// Caranya: mengatur mode shadow dengan `open`
const divElementShadowRoot = divElement.attachShadow({ mode: "open" });

// Membuat element <style> untuk styling element dari dalamn shadow tree
const styleELement = document.createElement("style");
styleELement.textContent = "h1 {color:green;}";

// Memasukkan element ke dalam shadow tree
// Menjadi child element dari shadow root. Shadow root seperti <html>
divElementShadowRoot.append(styleELement, headingElement);

// Memasukkan shadow host (elemen) ke regular DOM (DOM utama)
document.body.appendChild(divElement);

// Tampilkan object shadow root
console.log(divElement);
console.log(headingElement);
console.log(divElementShadowRoot);

// =================================================================
const openedDivElement = document.createElement("div");
const openedDivElementShadowRoot = openedDivElement.attachShadow({
  mode: "open",
});
openedDivElementShadowRoot.innerHTML = "<p>I have an open shadow root</p>";
document.body.appendChild(openedDivElement);

// closed mode
const closeDivElement = document.createElement("div");
const closedDivElementShadowRoot = closeDivElement.attachShadow({
  mode: "closed",
});
closedDivElementShadowRoot.innerHTML = "<p>I have a closed shadow root</p>";
document.body.appendChild(closeDivElement);

window.addEventListener("click", (event) => {
  console.log(event.target.shadowRoot);
  console.log(event.composedPath());
});
