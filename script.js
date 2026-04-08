const pages = document.querySelectorAll(".page");

function showOnScroll() {
    pages.forEach(page => {
        const offset = page.offsetTop - 300;

        if (window.scrollY > offset) {
            page.style.opacity = "1";
            page.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
