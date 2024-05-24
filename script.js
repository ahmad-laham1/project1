document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    document.getElementById('nextReview').addEventListener('click', function() {
        currentIndex = (currentIndex+1) % reviews.length;
        showReview(currentIndex);
    });

    document.getElementById('prevReview').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    showReview(currentIndex);

});

document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    document.getElementById('nextReview').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });

    document.getElementById('prevReview').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    showReview(currentIndex);

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            updateStarColors(selectedRating);
        });
    });

    function updateStarColors(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});
