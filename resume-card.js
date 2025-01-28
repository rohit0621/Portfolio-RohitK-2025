const template = document.getElementById("resume-card");
const container = document.getElementById("resume-card-container");

// Create a new card
function createCard(year, title, subtitle, content) {
  const card = template.content.cloneNode(true);
  card.querySelector(".resume-card-year").textContent = year;
  card.querySelector(".resume-card-title").textContent = title;
  card.querySelector(".resume-card-sub-title").textContent = subtitle;
  card.querySelector(".resume-card-content").textContent = content;
  container.appendChild(card);
}

// Reuse the template to create multiple cards
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences."
);
createCard(
  "2015-2019",
  "Frontend Development Bootcamp",
  "Tech Academy",
  "Focused on building responsive websites using HTML5, CSS3, and JavaScript, and creating user-friendly interfaces."
);
createCard(
  "2015-2019",
  "Frontend Development Bootcamp",
  "Tech Academy",
  "Focused on building responsive websites using HTML5, CSS3, and JavaScript, and creating user-friendly interfaces."
);
createCard(
  "2018",
  "Freelance Developer",
  "Self-employed",
  "Worked with various clients on creating websites and web applications for small businesses and startups."
);
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences."
);
createCard(
  "2015-2019",
  "Frontend Development Bootcamp",
  "Tech Academy",
  "Focused on building responsive websites using HTML5, CSS3, and JavaScript, and creating user-friendly interfaces."
);
