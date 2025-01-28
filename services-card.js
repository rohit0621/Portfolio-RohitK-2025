const data = [
  { icon: "fas fa-desktop", title: "Web Development" },
  { icon: "fa-solid fa-code", title: "Coding" },
  { icon: "fa-solid fa-laptop-code", title: "App Development" },
  { icon: "fa-solid fa-laptop-code", title: "Refactor code" },
  { icon: "fas fa-desktop", title: "Unit Testing" },
  { icon: "fa-solid fa-code", title: "Code Review" },
];

const servicesContainer = document.getElementById("services-card-container");

function createCard(icon, title) {
  const card = document.createElement("div");
  card.className = "services-card";
  card.innerHTML = `
<i class="${icon} services-icon"></i> 
<p class="services-card-title">${title}</p>
  `;
  return card;
}

data.forEach((item) => {
  const card = createCard(item.icon, item.title);
  servicesContainer.appendChild(card);
});
