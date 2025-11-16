 document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Typed.js Animation for Hero Section
    if (document.querySelector(".typed-text")) {
        var typed = new Typed(".typed-text", {
            strings: ["a Computer Science Student", "a Full-Stack Developer", "a Creative Problem-Solver", "a Lifelong Learner"],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }
});