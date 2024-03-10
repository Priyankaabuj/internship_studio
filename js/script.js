// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Horizontal Slider Animation
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-container img');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider-container');
const slideWidth = slides[0].clientWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

// Autoplay functionality
setInterval(nextSlide, 1000); // Change slide every 5 seconds
