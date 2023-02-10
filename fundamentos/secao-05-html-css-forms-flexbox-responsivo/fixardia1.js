// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", (event) => {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
});

INPUT_TEXT.addEventListener("keypress", (event) => {
    event.preventDefault();
  if ((event.key === "A")) {
    INPUT_TEXT.value += "A";
  }
});
