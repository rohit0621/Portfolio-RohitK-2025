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
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. I specialize in turning ideas intovisually stunning, responsive, and functional websites."
);
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. I specialize in turning ideas intovisually stunning, responsive, and functional websites."
);
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. I specialize in turning ideas intovisually stunning, responsive, and functional websites."
);
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. I specialize in turning ideas intovisually stunning, responsive, and functional websites."
);
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. I specialize in turning ideas intovisually stunning, responsive, and functional websites."
);
createCard(
  "2013-2017",
  "Bachelor of Engineering",
  "RNSIT",
  "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences. I specialize in turning ideas intovisually stunning, responsive, and functional websites."
);
