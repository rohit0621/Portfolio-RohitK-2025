// Use the DOMContentLoaded event to ensure the DOM is ready before your script runs.
document.addEventListener("DOMContentLoaded", function () {
  const template = document.getElementById("blog-article");
  const container = document.getElementById("blog-article-container");

  const templateCard = document.getElementById("blog-card");
  const containerCard = document.getElementById("blog-card-container");

  const cardData = [
    {
      count: 100,
      title: "Completed Projects",
    },
    {
      count: 250,
      title: "Completed Projects",
    },
    {
      count: 84,
      title: "Completed Projects",
    },
    {
      count: 1212,
      title: "Completed Projects",
    },
  ];

  // Create a new card
  function createArticle(images, date, blogger, comments, title, subtitle) {
    const card = template.content.cloneNode(true);
    card.querySelector("img").src = images.src; // Set image source
    card.querySelector("img").alt = images.title; // Set alt text
    card.querySelector(".blog-article-date").textContent = date.toUpperCase();
    card.querySelector(".blog-article-blogger").textContent =
      blogger.toUpperCase();
    card.querySelector(".blog-article-comments").textContent = comments;
    card.querySelector(".blog-article-title").textContent = title;
    card.querySelector(".blog-article-sub-title").textContent = subtitle;
    container.appendChild(card);
  }

  cardData.forEach((item) => {
    const clone = templateCard.content.cloneNode(true);
    clone.querySelector(".blog-card-count").textContent = item.count;
    clone.querySelector(".blog-card-title").textContent = item.title;

    containerCard.append(clone);
  });

  // Reuse the template to create multiple cards
  createArticle(
    { src: "https://picsum.photos/id/180/600", title: "Image-1" },
    "June 21, 2019",
    "Admin",
    "3",
    "Frontend Development Bootcamp",
    "A passionate Frontend Developer with a keen eye for creating engaging and user-friendly web experiences."
  );
  createArticle(
    { src: "https://picsum.photos/id/192/600", title: "Image-2" },
    "June 21, 2019",
    "Admin",
    "3",
    "Frontend Development Bootcamp",
    "Focused on building responsive websites using HTML5, CSS3, and JavaScript, and creating user-friendly interfaces."
  );
  createArticle(
    { src: "https://picsum.photos/id/201/600", title: "Image-3" },
    "June 21, 2019",
    "Admin",
    "3",
    "Frontend Development Bootcamp",
    "Focused on building responsive websites using HTML5, CSS3, and JavaScript, and creating user-friendly interfaces."
  );
});
