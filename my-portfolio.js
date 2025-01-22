// Keeping Nav link active according to section

// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
console.log(sections);
// Function to update active link
function updateActiveLink() {
  let currentSection = "";

  // Get the currently visible section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // If the scroll position is within the section
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  // Update the active link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", updateActiveLink);

// Add click event to smooth scroll and keep active state
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active from all links and add to clicked one
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    // Smooth scroll to the section
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Smooth Scroll Script
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

//   Nav links on smaller screen
const menuIcon = document.getElementById("menu-icon");
const navSection = document.getElementById("nav-links");
//   console.log(navSection)
menuIcon.addEventListener("click", (e) => {
  navSection.classList.toggle("fade-in");
  navSection.classList.toggle("menu-active");
});

// Hide the nav menu when clicking anywhere outside of it
document.addEventListener("click", (e) => {
  if (!navSection.contains(e.target) && !menuIcon.contains(e.target)) {
    navSection.classList.remove("fade-in", "menu-active");
  }
});

// Select the element you want to modify - const navSection defined above
// Function to toggle class based on screen size
function handleScreenResize() {
  if (window.innerWidth > 768) {
    // Add class for small screens
    navSection.classList.remove("menu-active", "fade-in");
  }
}

// Initial check
handleScreenResize();

// Listen for screen resize events
window.addEventListener("resize", handleScreenResize);
