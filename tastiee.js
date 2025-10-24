
// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});

// Menu Category Filter
const categoryBtns = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        const category = this.getAttribute('data-category');

        // Show/hide menu items based on category
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('show');
        }
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
