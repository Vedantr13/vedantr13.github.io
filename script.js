// --- Menu Icon Toggle ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Font Awesome class for 'X'
    navbar.classList.toggle('active');
};


// --- Active Nav Link on Scroll ---
window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // --- Sticky Header ---
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // --- Close menu when a nav link is clicked ---
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


// --- Typing Animation ---
var typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Engineer', 'Data Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
