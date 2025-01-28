// Use the DOMContentLoaded event to ensure the DOM is ready before your script runs.
document.addEventListener("DOMContentLoaded", function () {
  const linksList = ["Home", "About", "Services", "Projects", "Contact"];
  const servicesList = [
    "Web Development",
    "Coding",
    "App Development",
    "Refactor code",
    "Unit Testing",
    "Code Review",
  ];

  const templateLinks = document.getElementById("footer-link");
  const templateServices = document.getElementById("footer-service");
  const linksContainer = document.getElementById("footer-links-list");
  const servicesContainer = document.getElementById("footer-services-list");

  linksList.forEach((item) => {
    const clone = templateLinks.content.cloneNode(true);
    clone.querySelector("a").href = `#${item.toLowerCase()}`;
    clone.querySelector("a").textContent = item;

    linksContainer.appendChild(clone);
  });
  servicesList.forEach((item) => {
    const clone = templateLinks.content.cloneNode(true);
    clone.querySelector("a").href = `#${item.toLowerCase()}`;
    clone.querySelector("a").textContent = item;

    servicesContainer.appendChild(clone);
  });
});
