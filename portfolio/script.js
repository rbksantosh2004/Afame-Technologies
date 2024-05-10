// Add your JavaScript code here, for example:

// Highlight navigation link on click
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
});
