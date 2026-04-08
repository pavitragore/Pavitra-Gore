const pages = document.querySelectorAll(".page");

function showOnScroll() {
    pages.forEach(page => {
        const top = window.scrollY;
        const offset = page.offsetTop - 300;

        if (top > offset) {
            page.style.opacity = "1";
            page.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
