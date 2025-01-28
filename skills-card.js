// Use the DOMContentLoaded event to ensure the DOM is ready before your script runs.
document.addEventListener("DOMContentLoaded", function () {
  const template = document.getElementById("skills-card");
  const container = document.getElementById("skills-card-container");
  const upperDiv = document.getElementById("skills-content");

  // Create a new card
  function createCard(title, percentage) {
    const card = template.content.cloneNode(true);
    card.querySelector(".skills-card-title").textContent = title;
    card.querySelector(".skills-card-percentage").textContent = percentage;
    card.querySelector(".skills-card-progress").classList.add("progress");
    card.querySelector(".skills-card-progress").style.width = percentage;
    card.querySelector("#skills-content").style.width = percentage;

    container.appendChild(card);
  }

  // Create multiple cards
  createCard("HTML", "95%");
  createCard("CSS", "90%");
  createCard("JavaScript", "85%");
  createCard("Tailwind", "95%");
  createCard("React", "95%");
  createCard("Git/GitHub", "80%");
});
