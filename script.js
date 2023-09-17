// script.js
let currentIndex = 0;
const images = document.querySelectorAll(".image-slider img");

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 3000); // Change image every 3 seconds
