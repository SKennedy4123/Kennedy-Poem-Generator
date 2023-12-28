function generatePoem(event) {
  event.preventDefault();

new Typewriter("#new-poem", {
    strings: "New poem here...",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
