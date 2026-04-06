// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Footer year
document.getElementById("footer-text").innerHTML =
    `© ${new Date().getFullYear()} Your Name`;

// Button
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}
