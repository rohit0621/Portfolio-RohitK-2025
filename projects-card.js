// Use the DOMContentLoaded event to ensure the DOM is ready before your script runs.
document.addEventListener("DOMContentLoaded", function () {
  // Array of image data
  const images = [
    { src: "https://picsum.photos/id/0/600/300", title: "Image-1" },
    { src: "https://picsum.photos/id/311/600/300", title: "Image-2" },
    { src: "https://picsum.photos/id/305/600/300", title: "Image-3" },
    { src: "https://picsum.photos/id/180/300/300", title: "Image-4" },
    { src: "https://picsum.photos/id/192/600/300", title: "Image-5" },
    { src: "https://picsum.photos/id/201/300/300", title: "Image-6" },
  ];

  const imageContainer = document.getElementById("projects-card-container");
  const template = document.getElementById("projects-card");
  const imageDiv = document.getElementsByClassName("projects-card");

  // Populate images dynamically
  images.forEach((image) => {
    // Clone the template content
    const clone = template.content.cloneNode(true);
    clone.querySelector("img").src = image.src; // Set image source
    clone.querySelector("img").alt = image.title; // Set alt text
    clone.querySelector("div").id = image.title.toLowerCase();

    // Append the cloned content to the container
    imageContainer.appendChild(clone);
  });
});
