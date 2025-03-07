document.addEventListener("DOMContentLoaded", () => {
    console.log("Carousel script loaded");

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const indicatorText = document.querySelector('#index-indicator');

    let currentSlideIndex = 0;
    let startX = 0;
    let endX = 0;

    document.querySelectorAll(".carousel-slide img").forEach(img => {
        if (img.naturalHeight > img.naturalWidth) {
            img.classList.add("portrait");
        }
    });

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
        updateTextIndicator();
    }

    function updateTextIndicator() {
        indicatorText.textContent = `${currentSlideIndex + 1}/${slides.length}`;
    }

    function goToNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function goToPrevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    nextButton.addEventListener('click', goToNextSlide);
    prevButton.addEventListener('click', goToPrevSlide);

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            goToNextSlide();
        } else if (endX - startX > 50) {
            goToPrevSlide();
        }
    });

    window.addEventListener('resize', updateSlidePosition);

    updateSlidePosition();
});
