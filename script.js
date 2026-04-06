
// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Footer Year
document.getElementById("footer-text").innerHTML =
    `© ${new Date().getFullYear()} Your Name`;

// Resume Button
function downloadResume() {
    alert("Add your resume PDF link here!");
}
