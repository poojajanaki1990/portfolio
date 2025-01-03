// Image sources for carousel
const images = ["./natural/natural1.jpg", "./natural/natural2.jpg", "./natural/natural3.jpg", "./natural/natural4.jpg"]; // Add more image URLs as needed
let currentImageIndex = 0;

// Open the popup with the clicked image
function openPopup(index) {
    currentImageIndex = index;
    document.getElementById("popup-image").src = images[currentImageIndex];
    document.getElementById("popup").style.display = "flex";
}

// Close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Change image in the carousel
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById("popup-image").src = images[currentImageIndex];
} 