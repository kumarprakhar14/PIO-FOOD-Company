const slider = document.querySelector('.slider');
const navButtons = document.querySelectorAll('.slider-nav a');
let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let autoSlide;

// Function to move to a specific slide
function moveToSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateNavButtons(); // Update button highlights
}

// Function to update the navigation button's active state
function updateNavButtons() {
    navButtons.forEach(button => button.classList.remove('active'));
    navButtons[currentIndex].classList.add('active');
}

// Function to move to the next slide automatically
function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    moveToSlide(currentIndex);
}

// Auto-slide every 3 seconds
autoSlide = setInterval(moveToNextSlide, 3000);

// Add click event to navigation buttons for manual slide control
navButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        moveToSlide(index);
        clearInterval(autoSlide); // Stop auto-sliding after manual interaction
        autoSlide = setInterval(moveToNextSlide, 3000); // Restart auto-sliding
    });
});

// Initialize by setting the first button as active
updateNavButtons();
