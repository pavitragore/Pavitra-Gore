function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// simple alert on submit
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent!");
});
