(() => {
  const charListEl = document.querySelector('#charList');

  const templateCharItem = (char) => `
    <article tabindex="0" class="char-item">
      <h3 class="char">
        <span class="char-upper">${char.style.upper}</span>
        <span class="char-lower">${char.style.lower}</span>
      </h3>
      <div class="char__description">
        <div class="char__name">${char.name}</div>
        <div class="char__pronounce">${char.pronounce}</div>
      </div>
      <div class="char__example">
        <img class="char__example-img" src="${char.examples[0].img}" alt="${char.examples[0].title}" />
        <p class="char__example-name">${char.examples[0].title}</p>
      </div>
    </article>
  `;

  charListEl.innerHTML = '';
  alphabets.forEach((char) => {
    charListEl.innerHTML += templateCharItem(char);
  });
})();
