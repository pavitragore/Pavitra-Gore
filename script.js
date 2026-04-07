// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Active Navbar
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`nav a[href="#${id}"]`)
          .classList.add("active");
      });
    }
  });
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".project-box, .cert-card, h2")
  .forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

// Button Scroll
function scrollToSection() {
  document.getElementById("projects")
    .scrollIntoView({ behavior: "smooth" });
}

// Form Alert
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message Sent 🚀");
});

// Image Hover Effect
document.querySelectorAll(".project-img img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
