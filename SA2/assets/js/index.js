function scrollElement(element, direction) {
  element.scrollBy({
    behavior: "smooth",
    left: direction === "left" ? -420 : 420,
  });
}

const newsArrowLeft = document.querySelector("#news-arrow-left");
const newsArrowRight = document.querySelector("#news-arrow-right");

newsArrowLeft.addEventListener("keyup", (event) => {
  if (event.key === "Enter")
    scrollElement(document.querySelector("#news-container"), "left");
});

newsArrowLeft.addEventListener("click", function (event) {
  event.preventDefault();
  event.target.blur();
  scrollElement(document.querySelector("#news-container"), "left");
});

newsArrowRight.addEventListener("keyup", (event) => {
  if (event.key === "Enter")
    scrollElement(document.querySelector("#news-container"), "right");
});

newsArrowRight.addEventListener("click", function (event) {
  event.preventDefault();
  event.target.blur();
  scrollElement(document.querySelector("#news-container"), "right");
});
