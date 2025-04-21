// Menu navigation
const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger');
        const closeIcon = document.getElementById('close');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

// Close the mobile menu when a link is clicked

// Hero section

const slider = document.getElementById('slider');
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;
        let currentIndex = 0;
        let isTransitioning = false;

        // Clone first and last slides for seamless looping
        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[totalSlides - 1].cloneNode(true);
        slider.appendChild(firstClone);
        slider.insertBefore(lastClone, slides[0]);

        const allSlides = document.querySelectorAll('.slide');
        slider.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;

        function updateDots() {
            dots.forEach((dot, i) => {
                dot.classList.toggle('opacity-100', i === currentIndex);
                dot.classList.toggle('opacity-75', i !== currentIndex);
            });
        }

        function moveToSlide(index) {
            if (isTransitioning) return;
            isTransitioning = true;

            currentIndex = index;
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;

            updateDots();
        }

        function nextSlide() {
            if (isTransitioning) return;
            currentIndex = (currentIndex + 1) % totalSlides;
            moveToSlide(currentIndex);
        }

        function prevSlide() {
            if (isTransitioning) return;
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            moveToSlide(currentIndex);
        }

        function goToSlide(index) {
            moveToSlide(index);
        }

        // Handle seamless looping
        slider.addEventListener('transitionend', () => {
            if (currentIndex === -1) {
                currentIndex = totalSlides - 1;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
            }
            if (currentIndex === totalSlides) {
                currentIndex = 0;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
            }
            isTransitioning = false;
        });

        // Auto-slide every 5 seconds
        let autoSlide = setInterval(nextSlide, 5000);

        // Pause auto-slide on hover
        document.querySelector('.slider-container').addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });

        // Resume auto-slide on mouse leave
        document.querySelector('.slider-container').addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 5000);
        });

        // Initialize
        updateDots();

// Hero section end

// Bike and gear section

let currentIndexUnique = 0;
        const trackUnique = document.getElementById('carouselTrackUnique');
        const cardsUnique = document.querySelectorAll('.carousel-card-unique');
        const totalCardsUnique = cardsUnique.length;

        function moveCarouselUnique(direction) {
            currentIndexUnique += direction;

            // Loop around
            if (currentIndexUnique < 0) {
                currentIndexUnique = totalCardsUnique - 1;
            } else if (currentIndexUnique >= totalCardsUnique) {
                currentIndexUnique = 0;
            }

            // Update transform
            const offsetUnique = -currentIndexUnique * 100;
            trackUnique.style.transform = `translateX(${offsetUnique}%)`;
        }

// Bike and gear section end

// Dummy feedback data
const feedbacks = [
    { 
        name: "Damien T", 
        quote: "Wonderful tour. My guide was Ron, I already knew him with a past tour. He's really handsome. He adapts to your rhythm, takes care about you and may even discover his own country thanks to you. A truly memorable experience that I will cherish forever!", 
        rating: 5, 
        date: "April 1", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "John Doe", 
        quote: "An incredible experience! The guides were fantastic and made the trip unforgettable. I would highly recommend this to anyone looking for an adventure.", 
        rating: 5, 
        date: "March 15", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "Jane Smith", 
        quote: "Best trip ever! Highly recommend. The scenery was breathtaking, and the team was so professional and friendly throughout the journey.", 
        rating: 4, 
        date: "February 28", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "Mike Johnson", 
        quote: "Unforgettable memories! The tour was well-organized, and the guides were knowledgeable. I can't wait to book another trip!", 
        rating: 5, 
        date: "January 10", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "Sarah Lee", 
        quote: "Loved every moment of the tour! The experience was seamless, and the guides made sure we had the best time possible.", 
        rating: 5, 
        date: "December 5", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "Emily Brown", 
        quote: "A truly amazing adventure. The landscapes were stunning, and the team went above and beyond to ensure we had a great time.", 
        rating: 4, 
        date: "November 20", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "David Kim", 
        quote: "Exceeded all expectations! From start to finish, the tour was exceptional. The guides were friendly and very knowledgeable.", 
        rating: 5, 
        date: "October 15", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "Alex White", 
        quote: "Would definitely come back again. The trip was well-planned, and the guides made it a truly enjoyable experience for everyone.", 
        rating: 4, 
        date: "September 10", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
    { 
        name: "Olivia Green", 
        quote: "Wonderful and stress-free! The team took care of everything, allowing us to fully enjoy the adventure without any worries.", 
        rating: 5, 
        date: "August 5", 
        source: "Tripadvisor", 
        image: "https://i.pinimg.com/736x/45/be/ca/45beca1186ed34a4e0853564e1d53c5e.jpg" 
    },
];

const feedbackList = document.getElementById("feedbackList");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// let currentIndex = 0; // Fixed: Added missing currentIndex declaration
const itemsPerPage = 3;

function createCard({ name, quote, rating, date, source, image }) {
    return `
        <div class="feedback-card">
            <img src="${image}" alt="${name}" class="feedback-image">
            <div class="feedback-content">
                <div class="feedback-header">
                    <h3 class="feedback-name">${name}</h3>
                    <span class="feedback-meta">${date} on ${source}</span>
                </div>
                <div class="feedback-rating">
                    ${Array.from({ length: 5 }, (_, i) => 
                        `<span class="rating-star">${i < rating ? '★' : '☆'}</span>`
                    ).join('')}
                </div>
                <p class="feedback-quote feedback-quote-limited" data-full-text="${quote}">${quote}</p>
                <span class="read-more">Read more</span>
            </div>
        </div>
    `;
}


function loadFeedbacks() {
    const nextFeedbacks = feedbacks.slice(currentIndex, currentIndex + itemsPerPage);
    nextFeedbacks.forEach(fb => {
        const cardHTML = createCard(fb);
        feedbackList.insertAdjacentHTML('beforeend', cardHTML);
    });
    currentIndex += itemsPerPage;

    if (currentIndex >= feedbacks.length) {
        loadMoreBtn.style.display = "none";
    }

    // Add event listeners for "Read more" links after loading cards
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', () => {
            const quoteElement = link.previousElementSibling;
            const isLimited = quoteElement.classList.contains('feedback-quote-limited');
            
            if (isLimited) {
                quoteElement.classList.remove('feedback-quote-limited');
                quoteElement.textContent = quoteElement.dataset.fullText;
                link.textContent = 'Read less';
            } else {
                quoteElement.classList.add('feedback-quote-limited');
                quoteElement.textContent = quoteElement.dataset.fullText;
                link.textContent = 'Read more';
            }
        });
    });
}

// Initial load
loadFeedbacks();

loadMoreBtn.addEventListener("click", loadFeedbacks);

// Feedback section end

