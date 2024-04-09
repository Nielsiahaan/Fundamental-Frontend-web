const form = document.querySelector("form");
const additionalForm = form.elements.additionalForm;
const isMarried = form.elements.isMarried;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = event.target.elements.name;
  const wifeNameInput = event.target.elements.wifeName;
  const childCountInput = event.target.elements.childCount;

  let additionalInformation;

  if (isMarried.checked) {
    additionalInformation = `Saya memiliki istri bernama ${wifeNameInput.value} dan anak berjumlah ${childCountInput.value}`;
  } else {
    additionalInformation = "Saya belum berkeluarga";
  }

  console.log(`Nama saya ${nameInput.value}. ${additionalInformation}`);
});

if (additionalForm) {
  additionalForm.hidden = true;
}

if (isMarried) {
  isMarried.setAttribute("aria-expanded", false);
  isMarried.setAttribute("aria-controls", isMarried.dataset.controls);

  isMarried.addEventListener("click", (event) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      event.target.setAttribute("aria-expanded", true);
      additionalForm.hidden = false;
    } else {
      event.target.setAttribute("aria-expanded", false);
      additionalForm.hidden = true;
    }
  });
}
