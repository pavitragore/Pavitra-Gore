// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic year
document.getElementById("footer-text").innerHTML =
    `© ${new Date().getFullYear()} Your Name | Portfolio`;

// Simple animation on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
