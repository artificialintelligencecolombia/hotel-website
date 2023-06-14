
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
/*images is a NodeList (It contains elements and we use this NodeList to
    manipule them: filter, searches, sorting).*/
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length; /*Calculate 
  the next slide index. It gives numbers from 1 position to final array pos*/
  updateSlider();
}

function updateSlider() {
  const translateXValue = `translateX(-${currentIndex * 100}%)`;
  /*This ensures that the slider moves from the right to the left 
  the 100% of image width.*/
  slider.style.transform = translateXValue;
  /* style is for set css property, style.trasform set the x traslation
  value (100% of the image from right to left).*/ 
}

setInterval(nextSlide, 3000);
// Automatically transition to the next slide every 3 seconds


