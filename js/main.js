const heroElement = document.querySelector('.hero');
const images = ['image2.JPG', 'image1.JPG', 'image3.JPG'];
let currentImageIndex = 0;

function preloadImages() {
    images.forEach(image => {
        const img = new Image();
        img.src = `images/${image}`;
    });
}

function changeBackgroundImage() {
    // Create a new div for the next image
    const nextImage = document.createElement('div');
    nextImage.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('images/${images[currentImageIndex]}') center/cover no-repeat;
        opacity: 0;
        z-index: 1;
    `;
    
    heroElement.appendChild(nextImage);

    // Fade in the new image
    setTimeout(() => {
        nextImage.style.opacity = '1';
    }, 50);

    // After transition, clean up and prepare for next
    setTimeout(() => {
        heroElement.style.background = `url('images/${images[currentImageIndex]}') center/cover no-repeat`;
        heroElement.removeChild(nextImage);
    }, 2000);

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Preload images
preloadImages();

// Change image every 7 seconds (giving more time for the transition)
setInterval(changeBackgroundImage, 7000);

// Initialize the first background
heroElement.style.background = `url('images/${images[0]}') center/cover no-repeat`;

       // FAQ Toggle Function
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.faq-question').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already open
            if (!isActive) {
                answer.classList.add('active');
                element.classList.add('active');
            }
        }

        // Form Submission
        function submitForm(event) {
            event.preventDefault();
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            event.target.reset();
        }

        // Smooth Scrolling for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Gallery Image Click Handler
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const overlay = this.querySelector('.gallery-overlay').textContent;
                alert(`Viewing: ${overlay}\n\nIn a real implementation, this would open a larger image or image carousel.`);
            });
        });