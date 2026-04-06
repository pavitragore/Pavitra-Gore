// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome message
window.onload = function () {
    console.log("Portfolio Loaded Successfully");
};

// Dynamic year
const year = new Date().getFullYear();
document.getElementById("footer-text").innerHTML = `© ${year} Your Name`;
