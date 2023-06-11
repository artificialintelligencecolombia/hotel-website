
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length; // Calculate the next slide index
  updateSlider();
}

function updateSlider() {
  const translateXValue = `translateX(-${currentIndex * 100}%)`; // Calculate the translation value
  slider.style.transform = translateXValue; // Apply the translation to slide to the next image
}

setInterval(nextSlide, 5000); // Automatically transition to the next slide every 3 seconds
