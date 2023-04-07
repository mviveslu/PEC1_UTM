const concertList = document.querySelector(".concertcontainer__list");
const scrollUpButton = document.querySelector(
  ".main__content__section__article__concertsInformation__button--up"
);
const scrollDownButton = document.querySelector(
  ".main__content__section__article__concertsInformation__button--down"
);
scrollUpButton.disabled = true;
const scrollListener = () => {
  if (concertList.scrollTop === 0) {
    scrollUpButton.disabled = true;
    scrollUpButton.style = "background-color : #cbcbcb";
  } else {
    scrollUpButton.disabled = false;
    scrollUpButton.style = "background-color : #7a7a7a";
  }
  if (
    Math.round(concertList.scrollTop + concertList.clientHeight) ===
    concertList.scrollHeight
  ) {
    scrollDownButton.disabled = true;
    scrollDownButton.style = "background-color : #cbcbcb";
  } else {
    scrollDownButton.disabled = false;
    scrollDownButton.style = "background-color : #7a7a7a";
  }
};
const scrollUp = () => {
  concertList.scrollBy(0, -50);
};
const scrollDown = () => {
  concertList.scrollBy(0, 50);
};
concertList.addEventListener("scroll", scrollListener);
