const menuBtn = document.querySelector(".home");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0; // Variable to keep track of the current slide
let intervalId; // Variable to store the interval ID

// Function to handle automatic slide change
function autoChangeSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

// Set interval for auto slide change (every 3 seconds for a fade effect)
function startAutoChange() {
    intervalId = setInterval(autoChangeSlide, 3500);
}

// Start automatic slide change initially
startAutoChange();

// Function to stop the automatic slide change
function stopAutoChange() {
    clearInterval(intervalId);
}

// Function to update the slider (common logic for manual and automatic changes)
function updateSlider() {
    btns.forEach((btn, i) => {
        btn.classList.remove("active");
        contents[i].classList.remove("active");
    });

    slides.forEach((slide, i) => {
        slide.style.opacity = 0; // Set initial opacity to 0 for all slides
        if (i === currentIndex) {
            slide.style.opacity = 1; // Set opacity to 1 for the active slide
        }
    });

    btns[currentIndex].classList.add("active");
    contents[currentIndex].classList.add("active");
}

// Set up event listeners for manual slide change
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        stopAutoChange();
        currentIndex = i; // Update the currentIndex manually
        updateSlider();
        startAutoChange(); // Restart automatic slide change after manual interaction
    });
});

function exploreMore() {
    window.location.href = "women.html";
}

function redirectToKidsPage() {
    window.location.href = 'kids.html';
}

function showAlert(){
    alert("Congratulations, you've successfully sign up for our Newsletter!");
}